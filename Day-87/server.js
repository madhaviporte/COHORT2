const express = require("express")

const app = express()

app.use(express.json()) // req.body ki value store krana hai server me to ishka use krna pdhega kuki express me store krane ke liye ye capable nahi hai ish vhaj se.

const notes = [
    // {
    //     title: "test title 1",
    //     description: "test description 1"
    // },
    // {
    //     title: "test description 2",
    //     description: "test description 2"
    // }
]

app.post("/notes",(req,res)=>{

    console.log(req.body);
    
    res.send("note created")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})