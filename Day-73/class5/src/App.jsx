// import React from 'react'
// import { useState } from 'react';

// const App = () => {

//   const [num, setNum] = useState(0)

  
  
//   return (
//     <div>
//       <h1>{num}</h1>

//       <button onClick= {()=>{
//         setNum(num+10)
//       }}>Increase</button>

//       <button onClick= {()=>{
//         setNum(num-10)
//       }}>Decrease</button>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const App = () => {

  const [num,setNum]= useState(0)

  return (
    <div>
      <div className='box'>
    {num}
      </div>
      <button onClick={()=>{
        const rdm =Math.floor(Math.random()*100)
      setNum(rdm)
      }}>
        Click here</button>
    </div>
  )
}

export default App
