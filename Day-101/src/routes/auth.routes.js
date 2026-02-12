const express = require('express')
const userModel = require('../models/user.model.js')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')



const authRouter = express.Router()

authRouter.post('/register', async (req, res) => {
    const { email, username, password, bio, profileImage } = req.body

    // const isUserExixtsByEmail = await useModel.findOne({ email })

    // if (isUserExixtsByEmail) {
    //     return res.status(409).json({
    //         message: "user already exists with same email"
    //     })
    // }

    // const isUserExixtsByUsername = await userModel.findOnne({ username })

    // if (isUserExixtsByUsername) {
    //     return res.status(409).json({
    //         message: "user already exists by username"
    //     })
    // }

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email} 
        ]
    })
    if(isUserAlreadyExists){
        return res.status(409)
        .json({
            message: "user already exists" + (isUserAlreadyExists.email == email ? "Email already exists" : "Username already exists ")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password:hash
    })

    const token = jwt.sign({
        //user ka data hota chahiye
        // data unique hona chahiye

        id: user._id

    },
    process.env.JWT_SECRET,
    {expiresIn: "1d"}
)

res.cookie("token", token)

res.status(201).json({
    message:"User Register successfully",
    user:{
        email:user.email,
        username: user.username,
        bio:user.bio,
        profileImage: user.profileImage
    }
})


})

authRouter.post("/login", async (req,res) =>{
    const {username, email,password} = req.body


    const user = await userModel.findOne({
        $or:[
            {
              username : username    
            },
            {
            email:email
            }
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"User not found"
    })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const ispasswordValid = hash == user.password

    if(!ispasswordValid){
        return res.status(401).json({
            message: "password invalid"
        })
    }

    const token = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )
    res.cookie("token", token)

    res.status(200)
    .json({
        message: "user LoggedIn successfully.",
        user:{
            username:user.username,
            email:user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
})


module.exports = authRouter