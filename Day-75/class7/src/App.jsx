import React, { useState } from 'react'
import Card from './components/Card'
const App = () => {

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userDesc, setUserDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    // const oldUsers = [...allUsers]
    setAllUsers([...allUsers,{userName,userRole,userDesc,imageURL}])
    // setAllUsers(oldUsers)

    setUserName('')
    setUserRole('')
    setUserDesc('')
    setImageURL('')

  }
  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]

    copyUsers.splice(idx, 1)
    setAllUsers(copyUsers)
  }
  return (

    <div className='h-screen bg-black text-white'>

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='px-2 py-2 flex flex-wrap'>

        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' type="text" placeholder='Enter your name' />

        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' type="text" placeholder='Image URL' />

        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' type="text" placeholder='Enter Description' />

        <input
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' type="text" placeholder='Enter role' />

        <button
          // value={userDesc}
          // onChange={(e)=>{
          //   setUserDesc(e.target.value)
          // }}
          className='border-2 px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-emerald-700 rounded m-2 w-[97%]' >Create User</button>

      </form>

      <div className='px-4 py-10 gap-4 flex flex-wrap'>

       {allUsers.map(function(elem,idx){
        return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />
       })}

        {/* <div className='w-[30vw] lg:bg-green-400 rounded-xl py-8 px-8 flex items-center flex-col text-center h-80 bg-white text-black'>
          <img className='h-24 w-24 rounded-full' src="https://plus.unsplash.com/premium_vector-1711574973371-0979def97d13?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1 className='text-xl mt-2 font-bold'>Madhavi Porte</h1>
          <h5 className='text-lg text-blue-500 font-semibold my-2'>Developer</h5>
          <p className='text-sm font-medium leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

          <button
            onClick={() => {
              deleteHandler()
            }}
            className='px-4 py-2 rounded bg-red-600 text-xs cursor-pointer active:scale-95'>Remove</button>
        </div> */}

      </div>
    </div>
  )
}

export default App
