import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
        <h2>Navbar</h2>
        <input className='border-2' type="text" />
        <div className='flex gap-8'>
             <Link to='/'>Home Page</Link>
             <Link to='/about'>About Page</Link>
             <Link to='/products'>Products Page</Link>
             {/* <Link to='/products/men'>Men's Product Page</Link> */}
          {/* <a href="/">Home Page</a>
          <a href="/about">About Page</a>
          <a href="/products">Products Page</a> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
