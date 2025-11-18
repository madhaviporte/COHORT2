// var btn = document.createElement('button')
// btn.addEventListener('click', function(){
//     var h1 =document.createElement('h1')
//     console.log(h1);
    
// })

// var h1 =document.createElement('h1')
// h1.innerHTML = 'Hello From JS'
// document.querySelector('main')






// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// btn.addEventListener('click' ,function(){
//     var div =document.createElement('div')

//     var x = Math.random()*100
//     var y = Math.random()*100
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)

//     // div.style.height = '50px'
//     // div.style.width = '50px'
//     div.style.position = 'absolute'
//     div.style.backgroundColor = `rgb(${c1})`

//     div.style.left = x+'%'
//     div.style.left = y+'%'
//     main.appendChild(div)
//     // console.log(div);
//     })

// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// var arr = ['Hey! I am Madhavi', 'Sheriyans is best',"Bhaiya is best",'harsh Bhaiya ki jay ho']

// btn.addEventListener('click', function(){

//     var h1 = document.createElement('h1')

//     var x = Math.random()*80
//     var y = Math.random()*80
//     var rot = Math.random()*360
//     var rot = Math.random()*360
//     var rot = Math.random()*360
//     var a = Math.random()*arr.length

//     h1.innerHTML= arr[a]

//     h1.style.position = 'absolute'

//     h1.style.left=''

//     main.appendChild(h1)
    
// })

var btn=document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener('click', ()=>{
    var div =document.createElement('div')

    var x = Math.random()*100
    var y = Math.random()*100
    var r= Math.random()*360

    var c1 =Math.floor( Math.random()*256)    
    var c2 =Math.floor( Math.random()*256)    
    var c3 =Math.floor( Math.random()*256)    

    

    div.style.height='50px'
    div.style.width='50px'
    div.style.position='absolute'
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`
    div.style.left = x+'%'    
    div.style.top = y+'%'
    div.style.rotate= r+'deg'   

    
    main.appendChild(div)
    
})