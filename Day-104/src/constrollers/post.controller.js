const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
    console.log(req.body, req.file);

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Token not provided, unathorized access"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return rex.status(401).json({
            message: "user not athorized"
        })
    }


    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    console.log(decoded)

    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "cohort-2-insta-clone-posts"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })

    // res.send(file)

}

async function getPostController(req, res) {
    const token = req.cookies.token


    if(!token){
        return res.status(401).json({
            message:"Token not provided"
        })
    }
    let decoded;

    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
}catch(err){
    return res.status(401).json({
        message:"Token Invalid"
    })
}


const useId = decoded.id

const posts = await postModel.find({
    user: userId
})

res.status(200)
.json({
    message: "post fetching successfulyl"
})
}

module.exports = {
    createPostController,
    getPostController
}