const prompt = require("prompt-sync")();

let password = "madhaviporte";
let pass = prompt("password batado");
if(pass===null){
    console.error("enter correct pass");
    
}
else{
    if(pass ===password){
        console.log("matched");
        
    }else{
        console.log("not matched");
        
    }
}