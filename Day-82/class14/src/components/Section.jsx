import React from 'react'

const Section = (props) => {


    
  return (
    <div className='h-170 bg-zinc-800'>
      <h1 className='text-xl'>All Section</h1>
      {props.children[0]}
      {props.children[1]}
    </div>
  )
}

export default Section