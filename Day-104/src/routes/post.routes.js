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


postRouter.get("/details/:postId", postController.getPostDetailsController)

module.exports = postRouter