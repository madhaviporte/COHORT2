import React from 'react'

const User = () => {

    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3= Math.floor(Math.random()*256)
    const clr4 = Math.floor(Math.random()*256)
  return (
    <div style={{backgroundColor:`rgb{${clr1},${crl2},${crl3},${crl4}}`}} className='user-card'>
      
    </div>
  )
}

export default User
