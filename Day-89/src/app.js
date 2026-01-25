const express = require("express")
const app  = express()

app.use(express.json)

const notes = []

app.post("/notes", (req,res)=>{
    console.log(req.body);
    
    res.status(201).json({
        message: "Note created successfully"
    })
})

module.exports = app