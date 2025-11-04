
for (let i = 1; i < 11; i++) {
    console.log(i);
}


for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i < 21; i += 2) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    console.log(i);

}

for (let i = 1; i < 6; i++) {
    console.log("yes");

}

for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log("Even number");
    }
    else {
        console.log("Odd number");
    }
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) console.log(`${i}-Even`);
    else console.log(`${i}-Odd`);
}




const prompt = require("prompt-sync")();
// let num = prompt("number btao");
// prompt se kuchh bhi mango vo string hi dega
// if (num === 12) {
//     console.log("it is 12");
// }
// else {
//     console.log("it is not 12");
// }

// let num = +prompt("number batao");
// num = parseInt(num);
// if (num >= 0) {
// console.log("positive");
// }
// else {
// console.log("negative");
// }


let age = prompt("age batao");
if (age === null) {
    console.error("you cancelled it");

}
else
    if (age.trim() === "") {
        console.error("bhai dhang se likh le");

    }

    else {
        age = Number(age.trim());
        if (isNaN(age)) {
            console.error("bhai plz number dede....");

        }
        else {
            console.log("confirm number");
        }
    }
