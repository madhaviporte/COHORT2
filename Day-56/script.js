// let user1 = {
//     name: "harsh",
//     age : 27,
//     email : "madhavi@24gmail.com",
//     address: "ashok nagar",
// };
// let user2 = {
//     name: "harsh",
//     age : 27,
//     email : "madhavi@24gmail.com",
//     address: "ashok nagar",
// };

// class Remote{
//     constructor(product,price,color){
//         this.product =product;
//         this.price = price;
//         this.color = color;
//     }
//     powerOn(){
//         console.log("the machine is on now");

//     }
//     power(){
//         console.log("the machine is off now");
//          }
// }
// let remote = new Remote("lenovo", 23000 , "grey");

// class BiscuitMaker{
//     constructor(){
//         this.name = "parleG";
//         this.price = 5;
//     }
// }

// let biscuit = new BiscuitMaker();

class AlooChat {
    constructor() {
        this.price = 55;
        this.oil - "5ml";
        this.oilBrand = "Saffola";
        this.masaale = ["dhaniya", "pudina", "mirch"];
    }
    pack() {
        console.log("aloo chat packed");
    }
    unpack() {
        console.log("aalo chat unpacked");
    }
}
class ChholeChat {
    constructor() {
        this.price = 55;
        this.oil - "5ml";
        this.oilBrand = "Saffola";
        this.masaale = ["dhaniya", "pudina", "mirch"];
    }
    pack() {
        console.log("chhole chat packed");
    }
    unpack() {
        console.log("chhole chat unpacked");
    }
}
class Kitab {
    constructor() {
        this.name = "ASC";
        this.price = 1200;
        this.author = "Harsh";
        this.color = "yellow";
    }
    pannaPaltao() { }
    bookmarkLagao() { }
    padhlo() { }
}
class User {
    constructor() {
        this.username = "harsh";
        this.age = 20;
        this.email = "harsh@35.gmail";
    }
    khaanaKhao() { }
    saansLo() { }
}

let k1 = new Kitab();

class Human {
    constructor() {
        this.name = "abcd";
        this.age = 27;
    }
    // saansLo() {
    //     console.log("hey");
    // }
    // khaanaKhao() {
    //     console.log("hey");
    // }
}
Human.prototype.saansLo=function(){
    console.log("hey");
    };
Human.prototype.khaanaKhao =function(){
    console.log("hey");
    };

let h1 = new Human();
let h2 = new Human();