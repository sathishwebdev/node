import express from 'express';
import { getAdminByName} from '../helper.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const router = express.Router();
// login
router
.route('/login')
.post(async (req, res)=>{

    // body will be none if do with query

    const {username, password} = req.body ;

    // check user 

    const getUser = await getAdminByName(username)
    
    if(!getUser){
        res.status(401).send({message: "Invalid Credentials 💔"})
    }else if(getUser){
    //  check credentails
    const checkCred = await bcrypt.compare(password, getUser.password )

    if (checkCred){
        // token creation
        const token =  jwt.sign(getUser._id.toJSON(), process.env.ADMIN_SECRET_KEY)
        res.send({message: 'Log in Successfull 🤗', apiKey : token})
    } else if(!checkCred) {
        res.send({message:'Invalid Credentials 💔'})
    }
}
   
})


export const adminRouter = router