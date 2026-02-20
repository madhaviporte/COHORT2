import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const Register = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form className='form'>
          <input type="text" name='username' placeholder='Enter username' />
          <input type="text" name='username' placeholder='Enter email' />
          <input type="password" name='password' placeholder='Enter password' />
          <button>register</button>
        </form>
        
        <p>Alerdy have an account? <Link className='toggleAutherForm' to="/login">Login</Link> </p>
      </div>
    </main>
  )
}

export default Register
