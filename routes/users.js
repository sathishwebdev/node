import express from 'express';
import {keyGenerator, getSignup} from '../helper.js';

const router = express.Router();
router
.route('/')
.get((req, res)=>res.send("Need to <a href='users/signup'>sign up</a>"))

router
.route('/signup')
.post(async (req, res)=>{
    const data = req.body;
    const hashWord = await keyGenerator(data.password) 
    if(hashWord){
        data.password =  hashWord 
        let db_responce = await getSignup(data)
        res.send(db_responce)
    }
    else{
        res.send({message : `Password must be longer \n \t - Atleast 6 characters \n \t - Atleast one letter \n \t - Atleast one number \n \t - Atleast one special characters `})
    }
})
.get((req, res)=> res.send("post name and password"))

export const usersRouter = router