const express = require('express')
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
    const { email, name, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "user already exists with this email address"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign(
    {
        id: user.id,
        email: user.email
    },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)

    res.status(201).json({
        message: "user registered",
        user,
        token
    })
})


authRouter.post("/protected", async (req, res) =>{
  console.log("req.cookie");

  res.status(200).json({
    message: "this is a protected route"
  })
})

//api/auth/login
//controller

authRouter.post("/login", async (req,res) => {
   const{email,password} = req.body

   const user = await userModel.findOne({email})

   if(!user){
    return res.status(404).json({
        message: "User not found with this email address"
    })
   }
   const isPasswordMatched = user.password === password
   if(!isPasswordMatched){
    return res.status(401).json({
        message: "Invalid password"
    })
   }
   const token = jwt.sign({
    id:user._id,
   }, process.env.JWT_SECRET)

   res.cookie("jwt_token", token)

   res.status(200).json({
    message: "user logged in",
    user,
   })
})
module.exports = authRouter