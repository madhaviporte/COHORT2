const express = require('express')
const authController = require("../constrollers/auth.controller")



const authRouter = express.Router()


authRouter.post('/register', authController.registerController)

authRouter.post('/login',authController.loginController)

// authRouter.post("/login") 

module.exports = authRouter