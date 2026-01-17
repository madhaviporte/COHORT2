import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

   const[productData , setProductData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    setProductData(response.data)
  }

  // const getfirstData = async (id)=>{
  //   const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
  //   console.log(response.data);
  // }

  useEffect(function(){
    getData()
    
  }, [])

  return (
    <div className='allProduct'>

      {productData.map(function(elem,idx){
        return <a className='product' key={idx} href="">
          <div>
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
          </div>
        </a>
      })}
    </div>
  )
}

export default App
