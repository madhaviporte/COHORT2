const prompt = require("prompt-sync")();
let attempt =0;
let sahipassword = "madhavi";

let userpassword = prompt("apna password batao");
attempt++;

while(attempt <3 && sahipassword !==userpassword){
    userpassword = prompt ("apna password batao");
    attempt++;
}

if(attempt=== 3 && sahipassword !== userpassword){
    console.error("Account Locked");
    
} else {
    console.log("done");
    
}