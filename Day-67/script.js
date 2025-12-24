// gsap.to('#box',{
//     x:500,
//     duration: 2,
//     delay:1
// })

// var h1 = document.querySelector('h1')
// console.log(h1.innerHTML);

// var h1 = document.createElement('h1')

// h1.innerHTML = 'Hello from js'
// document.body.appendChild(h1)

// var h1 = React.createElement('h1',null,'Hello from React')
// var h2 = React.createElement('h2',null,'I am Groom')

// var div = React.createElement('div', {id:'parent'}, [h1,h2])

// // var container = document.querySelector('#container')

// var root = ReactDOM.createRoot(document.querySelector('#container'))
// root.render(div)

    // const a = React.createElement('h1',null,'hello from h1')

    const h1  = ()=> {
        React.createElement('h1', null, 'hello from h1')}


const root = ReactDOM.createRoot(document.querySelector('#container'))
 root.render(h1())