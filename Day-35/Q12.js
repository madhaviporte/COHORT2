const prompt = require("prompt-sync")();

let word = prompt("word bolo");
let counter =0;
while(word !== "stop"){
   if(word === "yes")
    counter++;
word = prompt("word bolo")
}
console.log(`total times yes count: ${counter}`);
