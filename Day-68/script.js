var h1 = React.createElement('h1' ,null, 'Hey I am sharthak From sheriyans')

var h2 = React.createElement('h2', null , 'Hello, this is h2')

// var container =document.querySelector('#container')

var div = React.createElement('div' , {id: 'parent'},[h1,h2])

var root =ReactDOM.createRoot(document.querySelector('#container'))
root.render(div)