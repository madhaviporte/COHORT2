// var allElems = document.querySelectorAll('.elem')

// allElems.forEach(function(){
//     elem.childNodes[3].addEventListener('click', function(){
//         console.log('nice');
        
//     })    
// })

var allBtn = document.querySelectorAll('button')

allBtn.forEach(function(elem){
    elem.addEventListener('click', function(){
        // elem.innerHTML = 'Remove Friend'

        if(elem.innerHTML == 'Add Friend'){
            elem.innerHTML = 'Remove Friend'
        }
        else{
            elem.innerHTML = 'Add Friend'
        }
    })
})

