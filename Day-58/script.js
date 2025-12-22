// class Animal {
//     constructor(){
//         this.leg = 4;
//         this.mouth = 1;
//     }
//     eat (){}
//     run (){}
// }
// class Kekda extends Animal {
//     constructor(){
//         super();
//         this.leg = 8;
//         this.hands = 0;

//     }
//     susu (){}
// }
// let k1 = new Kekda();

// let user1 = {
//     name: "harsh",
//     email : "harsh@24gmail.com",
//     login: function(){
//         console.log("logged in");
        
//     },
// };
// let user2 = {
//     name: "harsh",
//     email : "harsh@24gmail.com",
//     login: function(){
//         console.log("logged in");
        
//     },
// };
// let user3 = {
//     name: "harsh",
//     email : "harsh@24gmail.com",
//     login: function(){
//         console.log("logged in");
        
//     },
// };
// let user4 = {
//     name: "harsh",
//     email : "harsh@24gmail.com",
//     login: function(){
//         console.log("logged in");
        
//     },
// };
// let user5 = {
//     name: "harsh",
//     email : "harsh@24gmail.com",
//     login: function(){
//         console.log("logged in");
        
//     },
// };

// class User{
//     constructor(name , email){
//   this.name = name;
//   this.email = email;
//     }
//     loggedIn(){
//         console.log("loggedin");
        
//     }
// }
// new user1 = new User("harsh" , "harsh@gmail.com");

// let product = {
//     name: "cap",
//     price : 3300,
//     discountedPrice : function(){
//         return this.price - 200;
//     },
// };
// console.log(product.discountedPrice());

// class Car {
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         console.log(this.brand + " - " + this.speed);
        
//     }
// }
// new car1 = new Car("hundey car" , 180);
// new car2 = new Car("hundey car" , 170);

// class student{
//     constructor(name, rollnumber){
//         this.name = name;
//         this.rollnumber = rollnumber;
//     }
//     introduce(){
//         console.log(this.name + " " + this.rollnumber);
        
//     }
// }
// new student("harsh", 21);

// let obj = {
//     sayName: function(){
//         console.log(this);
        
//     },
//     sayArrayName: () => {
//         console.log(this);
        
//     },
// };
// obj.sayArrayName();
// obj.sayName();

// function User(){
//     this.name = "harsh";
// }
// User.prototype.loggedin = function (){
//     console.log("loggedin");
    
// };
// let an1 = new User();
// an1.loggedin();