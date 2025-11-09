const prompt = require("prompt-sync")();
let counter =0;
for(let i=1; i<21; i++){
    if(counter ===3) break;
    if(i%2 !==0){
        console.log(i);
        counter++;
    }
}