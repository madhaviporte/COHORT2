const express = require('express')
const userController = require("../constrollers/user.controller")
const identifyUser = require("../middlewares/auth.middlewear")

const userRouter = express.Router()


//@routs post/api/users/follow/:userid
//@description follow a user
//@access Private
userRouter.post("/follow/:username", identifyUser,userController.followUserController)


module.exports = userRouter;