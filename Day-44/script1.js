var btn =document.querySelector('button')
var main = document.querySelector('main')

// btn.addEventListener('click',function(){
//     var div =document.createElement('div')
//     div.style.height = '50px'
//     div.style.width = '50px'
//     div.style.backgroundColor = 'blue'
//     var x = Math.random()*100
//     var y = Math.random()*100
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)
//     div.style.position ='absolute'
//     div.style.top = y+'%'
//     div.style.left = x+'%'
//     div.style.backgroundColor= `rgb(${c1}, ${c2},${c3})`
//     main.appendChild(div)
    
// })
var arr = ['hey! i am madhavi', 'Sheritans is best', ' hasrh bhaiya ki jay ho','i am the best', 'you are my stregth mom','i am very lucky that u hav me','keep practicing guys']

btn.addEventListener('click',function(){

     var h1 = document.createElement('h1')

     var x = Math.random()*80
     var y = Math.random()*80
     var rot = Math.random()*360
     var scl = Math.random()*360
     var a =Math.floor(Math.random()*arr.length)

     h1.innerHTML = arr[a]
    //  console.log(arr[a]);
    h1.style.position='absolute'
    h1.style.left=x+'%'
    h1.style.top=y+'%'
    h1.style.rotate=rot+'deg'
    h1.style.scale=scl
    main.appendChild(h1)
     
})