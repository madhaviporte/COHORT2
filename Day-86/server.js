const express = require("express")

const app = express() // server instance create krna

app.get('/', (req,res)=>{
    res.send("hello world")
})
app.get("/about", function(req,res){
    res.send("This is about page")
})
app.listen(3000) // server start krna