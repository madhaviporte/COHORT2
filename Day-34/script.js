// 7.
const prompt = require("prompt-sync")();

let age = prompt("age btao");
if (age === null) {
    console.error("you cancelled it");
}
else {
    if (age.trim() === "") {
        console.error("Please write somthing....");
    }

    else {
        age = Number(age);
        if (isNaN(age)) {
            console.error("Please enter a number....");

        }
        else {
            if (age < 0) console.error("ammanyya age");
            else

                if (age >= 18)
                    console.log("You can vote");
                else console.log("You can`t vote");

        }
    }
}