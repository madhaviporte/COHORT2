// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={()=>{
//         setNum(num+1)
//       }}>Increase</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [title, setTitlle]= useState('')

  const [allUsers, setAllUsers]= useState(['Aman'])


  const submitHandler = (e)=>{
    e.preventDefault()

    const oldUsers = [...allUsers]
    oldUsers.push(title)
    console.log(oldUsers);
    
    
    setTitlle('')
  }

  // const [name, setName]= useState('')
  
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type="text"
        placeholder='Enter Name'
        // onChange={(e)=>{
        //   console.log(e.target.value);
          
        // }}
        value={title}
        required
        onChange={(e)=>{
          setTitlle(e.target.value);
          
        }}
        />
        <button>Submit</button>
      </form>

      {allUsers.map(function(elem){
        return <h1>{elem}</h1>
      })}
    </div>
  )
}

export default App
