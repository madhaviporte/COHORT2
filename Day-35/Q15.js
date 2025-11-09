const prompt = require("prompt-sync")();
 let num = prompt("number bolo");
num = Number(num);

while(num%2!==0){
    num = prompt("number bolo");
    num = Number(num);
}