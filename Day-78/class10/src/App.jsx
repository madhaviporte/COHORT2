// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const[counter,setCounter ]=useState(0)

//   useEffect(function(){
//     console.log('useEffect is running...');
    
//   })
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={()=>{
//         setCounter(counter+1)
//       }}>Increase</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
// const[title,setTitle]=useState(0)

// useEffect(function(){
//   console.log('useEffect is running...');
  
// })
//   return (
//     <div>
//       <input value={title} onChange={(e)=>{
//       setTitle(e.target.value)
//       }} type="text" />
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [allPokemon,setAllPokemon]=useState([])

//   const getData = async()=>{
//     const response = await axios.get('https://pokeapi.co/api/v2/pokemon')

//   setAllPokemon(response.data.result);
//   }
//   return (
//     <div>
//       <button onClick={getData}>click</button>
//       {allPokemon.map(function(elem,idx){
//         return
//         <h1 key={idx}>
//           {elem.name}
//         </h1>
//       })}
//     </div>
//   )
// }

// export default App

import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [username, setUsername] = useState('')

  const [num, setNum] = useState(0)

  const getData = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    setUsername((response.data.results[0].name.first) + " " + (response.data.results[0].name.last))
  }

  useEffect(function () {
    getData()
  }, [num])

  return (
    <div>
      {username}

      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}>click here</button>
    </div>
  )
}

export default App
