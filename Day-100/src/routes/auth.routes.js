const express = require('express')
const authRouter = express.Router()
const userModel = require('../models/user.model.js');
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

// Post ///api/auth/register
authRouter.post("/register" , async (req,res) =>{
    const {name, email, password,} = req.body;

    const isUserExists = await userModel.findOne({email})
    if(isUserExists){
        return res.status(409)
        .json({
            message: "user already exists"
        })
    }

    const user = await userModel.create({
        name,
        email,
        password: crypto.createHash('sha256').update(password).digest('hex') 
    })
    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, {expiresIn: "1h"})

    res.cookie("token", token)  // client side me token ko set  krti hai

    res.status(201).json({
        message: "user registered successfully",
        user:{
            name:user.name,
            email: user.email,
        }
    })
})


authRouter.get('/get-me', async (req, res) =>{
    const token = req.cookies.token

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

   const user = await userModel.findById(decoded.id)

   res.json({
    name: user.name,
    email: user.email,
   })
})
//Post /api /auth/login
// authRouter.post("/login")                
module.exports = authRouter