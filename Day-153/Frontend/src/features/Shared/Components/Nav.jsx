import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router'

const Nav = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.auth.user)
    const cartItems = useSelector(state => state.cart.items)



    return (
        <nav className="px-8 lg:px-16 xl:px-24 pt-10 pb-6 flex items-center justify-between border-b" style={{ borderColor: '#e4e2df' }}>
            <Link to="/"
                className="text-sm font-medium tracking-[0.35em] uppercase hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A96E' }}
            >
                Snitch.
            </Link>
            <div className="flex gap-6 items-center text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: '#7A6E63' }}>
                {user ? (
                    <>
                        <Link to="/cart" className="relative group p-1 transition-colors hover:text-[#C9A96E]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                            {cartItems?.length > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1b1c1a] text-[8px] text-white">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                        <span style={{ color: '#1b1c1a' }}>{user.fullname}</span>
                        {user.role === 'seller' && (
                            <Link to="/seller/dashboard" className="transition-colors hover:text-[#C9A96E]">Seller Dashboard</Link>
                        )}
                    </>
                ) : (
                    <>
                        <Link to="/login" className="transition-colors hover:text-[#C9A96E]">Sign In</Link>
                        <Link to="/register" className="transition-colors hover:text-[#C9A96E]">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav