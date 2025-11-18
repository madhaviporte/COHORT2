// console.log('hello 1');

// setTimeout(function(){
//   console.log(' hello 2');
  
// },3000)
// console.log('hello 3');

// var user = 'harsh'
//  var btn = document.querySelector('button')
//  var h1 = document.querySelector('h1')

//  btn.addEventListener('click', function(){
//     console.log('button is clicked');

//     setTimeout(() => {
//         console.log('hello guys');
        
//     }, 2000);
    
//  })

// setInterval(function(){
//     console.log('hello guys');
    
// },1000)

var a =0
var int =setInterval(()=>{
    a++
    console.log(a);
    
}, 100);
setTimeout(()=>{
    clearInterval(int)
}, 5000);