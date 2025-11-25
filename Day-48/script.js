// document.getElementById('box')
// var box =document.querySelector('#box')

// box.addEventListener('mauseleave', function(){
//     console.log('Enter...');
    
// })
// box.addEventListener('mauseenter', function(){
//     console.log('Leave....');
    
// })

// var chhutki = document.querySelector('img')
// var msg = document.querySelector('h2 span')
// // var body = document.querySelector('body')
// var body = document.body

// chhutki.addEventListener('mouseenter', function(){
//  msg.innerHTML= 'chhutki se door ho jaaa'    
//  body.style.backgroundColor= 'red'
// })
// chhutki.addEventListener('mouseleave', function(){
//     msg.innerHTML='good! ab door hi rahna'
//     body.style.backgroundColor='black'
    
// })
// var main =document.querySelector('#main')
// var cursor = document.querySelector('#cursor')

// main.addEventListener('mousemove', function(dets){
//     cursor.style.left = dets.x + 'px'
//     cursor.style.top = dets.y + 'px'
//     // console.log(dets);
    
    
// })
var body = document.body
var h1 = document.querySelector('h1')
body.addEventListener('keydown', function(dets){
    h1.innerHTML = dets.code
    
})

// var aud = new Audio('./24.mp3')
// var h1 =document.querySelector('h1')
// h1.addEventListener('click', function(){
//     aud.play()
    
// })