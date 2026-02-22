const express = require('express')
const authController = require("../constrollers/auth.controller")
const identifyUser = require("../middlewares/auth.middlewear")



const authRouter = express.Router()

//POST /api/auth/register

authRouter.post('/register', authController.registerController)


//POSt .api/auth/login

authRouter.post('/login',authController.loginController)



//@rouute GET /api/auth/get-me 
//@desc Get the currently logged in user's information
//@access Private

authRouter.get("/get-me",identifyUser, authController.getMeController)

module.exports = authRouter