const express = require("express")


const app = express() // server create ho jata hai

app.use(express.json()) // middle where name

const notes = [
    // {
    //     title:"test title 1",
    //     description:"test description 1"
    // }
];
app.get("/", (req,res)=>{
    res.send("hello world")
})


// POST /notes
app.post("/notes", (req,res)=>{
    console.log(req.body);
 notes.push(req.body)

 console.log(notes);
 
    res.send("note created")
    
})

//GET /notes
app.get("/notes", (req,res) =>{
    res.send(notes)  // clined dekh skta hai pura 
})

// DELETE /notes/3 
// params
app.delete("/notes/:index", (req,res)=>{
    // console.log(req.params.index);

    delete notes [req.params.index]
    res.send("note deleted succesfully")
    
})

// PATCH /notes
// req.body = {description :- "simple modified description."}

app.patch("/notes/:index", (req,res)=>{
    notes[req.params.index].description = req.body.description

    res.send("Note updated successfully")
})
module.exports = app  // server export kr diya hai