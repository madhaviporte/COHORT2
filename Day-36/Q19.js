const prompt = require("prompt-sync")();

let balance = 1000;
let flag = false;
let counter =0;
while(balance>0 && counter !==3){
    let withdraw = +prompt("kitna paisa withdrow karna hai");
    counter++;
    if(withdraw <= balance) balance -= withdraw;
    else {
        flag = true;
        break;
    }
}
if(flag === true){
    console.log("Insufficent balance");
    
}
console.log(`Balance : ${balance}`);
