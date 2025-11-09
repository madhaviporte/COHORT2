const prompt = require("prompt-sync")();

// pahla prompt
// galat -> doosra prompt ||| sahi huwa -> stop ho jayega
// doosra prompt bhi galat -->3 prompt --> account locked

// let i = 1;

// while(i<11){
//     console.log("hello");
//     i++;
//     }
let attempts = 0;
let open = false;
let pass = "madhavi";

let password = prompt("tum mujhe password do");
attempts++;

if(password === pass) open = true;

while ( password !== pass){
    if (attempts===3){
        console.error("your account blocked");
        break;
    }
    password = prompt("tum mujhe password do");
    if (password=== pass) open = true;
    attempts++;
}
if (open === ture)
    console.log("account opened");
    