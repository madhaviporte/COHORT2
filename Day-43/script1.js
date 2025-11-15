


// var btn = document.querySelector('button')
// var arr = ['vedant','abhi','madhavi','sumit','bhumika','anjali','kasturi','ritik','sudha','udisha','kanika','rakhi']


// btn.addEventListener('click', function(){
//       var a = Math.floor(Math.random()* arr.length)

//       console.log(arr[a]);
      
// })

var arr = [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'blue'
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'black'
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'gold'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold'
    }
]
// console.log(arr[num].team);

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click', function(){

    var winner= arr[Math.floor(Math.random()*arr.length)]
    h1.innerHTML= winner.team
    h1.style.backgroundColor=winner.secondary
    main.style.backgroundColor=winner.primary
    
})
