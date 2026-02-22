import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const Register = () => {

const [username, setUsername] =useState("")
const [email, setEmail] =useState("")
const [password, setPassword] =useState("")

async function handleSubmit(e){
  e.preventDefault()

  
}

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input 
          onInput={(e)=>{setUsername(e.target.value)}}
          type="text" name='username' placeholder='Enter username' />

          <input 
          onInput={(e)=>{setEmail(e.target.value)}}
          type="text" name='username' placeholder='Enter email' />

          <input 
          onInput={(e)=>{setPassword(e.target.value)}}
          type="password" name='password' placeholder='Enter password' />
          <button>register</button>
        </form>
        
        <p>Alerdy have an account? <Link className='toggleAutherForm' to="/login">Login</Link> </p>
      </div>
    </main>
  )
}

export default Register
