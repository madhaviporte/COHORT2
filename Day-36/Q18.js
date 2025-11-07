const prompt = require("prompt-sync")();
let counter =0;
for(let i=1; i<6; i++){
    let num = +prompt("number do");
    if (num>=0) 
        counter++;
}