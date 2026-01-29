const mongoose = require("mangoose")

const app = require("./src/app")

function connectToDb(){
         mangoose.connect("")
         .then(()=>{
            console.log("Connnected to DB");
            
         })
}

connectToDb()

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
    
})
