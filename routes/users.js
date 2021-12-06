import express from 'express';
import {keyGenerator, getSignup, getUserByName, editUser} from '../helper.js';
import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { adAuth } from '../middleware/adAuth.js';
import { client } from '../index.js';
import { ObjectId } from 'bson';



const router = express.Router();
router
.route('/')
.get(adAuth,async (req, res)=>{
    let userData = await client.db("Movies").collection("users").find({}).toArray()
    res.send(userData)
})

router
.route('/signup')
.post(async (req, res)=>{
    // body will be none if do with query
    const data = req.body;
    const hashWord = await keyGenerator(data.password) 
    //  check user avalaiblity
    let checkUserAvailability = await getUserByName(data.username)
    
    // check password strength 
    let passwordStrength = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(`${data.password}`)

    // check username
    let usernameStrength = /^[A-Za-z\d_]{4,}$/.test(`${data.username}`)

    // conditional statements
    if(checkUserAvailability){
        res.send({message : "Username Already Exist - Better Luck Next Time 😈"})
    }else if (!passwordStrength){
        res.send({message : `Password must be longer \n \t - Atleast 6 characters \n \t - Atleast one letter \n \t - Atleast one number \n \t - Atleast one special characters `})
    }else if (!usernameStrength){
        res.send({message : `Username should be min 3 characters - Only letters, numbers and _ can be accepteable`})
    }
    else{
        data.password =  hashWord 
        let db_responce = await getSignup(data)
        res.send(db_responce)
    }
    
})
.get((req, res)=> res.send(fs.readFileSync('./signup.html', 'utf-8')))

// login
router
.route('/login')
.post(async (req, res)=>{

    // body will be none if do with query

    const {username, password} = req.body ;

    // check user 

    const getUser = await getUserByName(username)
    
    if(!getUser){
        res.status(401).send({message: "Invalid Credentials 💔"})
    }else if(getUser){
    //  check credentails
    const checkCred = await bcrypt.compare(password, getUser.password )

    if (checkCred){
        // token creation
        const token =  jwt.sign(getUser._id.toJSON(), process.env.SECRET_KEY)
        res.send({message: 'Log in Successfull 🤗', apiKey : token})
    } else if(!checkCred) {
        res.send({message:'Invalid Credentials 💔'})
    }
}
   
})
.get((req, res)=> res.send(fs.readFileSync('./login.html', 'utf-8')))

router
.route('/edit/:id')
.put(adAuth, editUser)


export const usersRouter = router