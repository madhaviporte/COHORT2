import React, { createContext } from 'react'

export const userDataContext =  createContext()

const UserContext = (props) => {
  console.log(props);
  
  return (
    <div className='context-div'>
        <userDataContext>
          {props.children}
        </userDataContext>
    </div>
  )
}

export default UserContext
