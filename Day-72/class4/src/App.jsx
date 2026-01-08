// import Navbar from './Components/Navbar'
// import Men from './Components/Men'
// import Women from './Components/Women'

// const App = () => {

//   const user1 ={
//     name:'Sharthak',
//     age:30,
//     gender:'male',
//   }
//   const user2 ={
//     name:'Shreya',
//     age:20,
//     gender:'female',
//   }
//   const user3 ={
//     name:'Bixi',
//     age:10,
//     gender:'male',
//   }
//   return (
//     <div>
//       {/* <Navbar title='Madhavi' color='red' links={['Home','About','Account','Contact']}/>
//       <Navbar title='Bixi' color='blue' links={['Home','Services','Courses','Contact','Address']}/>
//       <Navbar title='Danish' color='green' links={['Home','Product','Men','Women']}/> */}
//       {/* <Men />
//       <Women /> */}
//     {user3.gender=='male'? <Men/>:<Women/>}
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {

 function btnClicked(){
    console.log('Button is Clicked!!!');
    
 }
  return (
    <div>
      <button
      onClick={btnClicked}
      className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'>Click to Download
      </button>
    </div>
  )
}

export default App
