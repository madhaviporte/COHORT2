const prompt = require("prompt-sync")();
let start = +prompt("start");
let end = +prompt("end");

if(start>end)
    console.error("start can not be bigger than end");
    

for(let i= start; i<=end; i++){
    console.log(i);
    
}