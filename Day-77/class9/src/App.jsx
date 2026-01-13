import React, { useState } from 'react'
import axios from 'axios'
import User from './components/User'
const App = () => {

  const[allData,setAllData]=useState([])
// const response = axios.get('')

//   console.log('data aa gya guys');

const getData = async ()=>{
const response = await axios.get('https://jsonplaceholder.typicode.com/users')

// console.log(response,data);
setAllData(response.data)

}


  return (
    <div>
      <button onClick={getData}>Get data</button>

      {allData.map(function(elem,idx){
        console.log(elem);
        
      return
      <User/>
})}
    </div>
  )
}

export default App
