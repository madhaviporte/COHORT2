const express = require("express")
const postRouter = express.Router() 
const postController = require("../constrollers/post.controller")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})

//post/api/posts [protected]
//req.body = {caption, image-file}

postRouter.post("/",upload.single("image") , postController.createPostController)


//GET /api/posts/[protected]

postRouter.get("/", postController.getPostController)


//GET/api/post/details/:postId
// -return an detail about specific post with the id. also check wheather the post belongs to the user

postRouter.get("/details/:postId", postController.getPostDetailsController)

module.exports = postRouter 