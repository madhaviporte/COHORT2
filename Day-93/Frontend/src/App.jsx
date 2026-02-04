import React, { useState, useEffect } from 'react'
import axios from "axios"

const App = () => {

  const [notes,setNotes]  =useState([

  //   {
  //   // title:"test title 1",
  //   // description: "test description"
  // },
  // {
  //   // title:"test title 2",
  //   // description: "test description"
  // },{
  //   // title:"test title 3",
  //   // description: "test description"
  // },{
  //   // title:"test title 4",
  //   // description: "test description"
  // }

  
  
])

console.log("hello Integration")
 
   
  //  }) 
function fetchNotes(){
  
axios.get('https://backend1-gules-ten.vercel.app/') // bakend ka server hai api/notes par hit krega
.then((res)=>{
  setNotes(res.data.notes)
  
})
}
 useEffect(()=>{
 fetchNotes()
  },[])

  function handleSumbit(e){
    e.preventDefault()

    const{title,description} = e.target.elements
    console.log(title.value,description.value);

    axios.post("https://backend1-gules-ten.vercel.app/",{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data);

      fetchNotes()
    })
  }
  function handleDeleteNote(noteId){
   axios.delete("https://backend1-gules-ten.vercel.app/"+noteId)
   .then(res=>{
    console.log(res.data);
    fetchNotes()
   })
   
  }

  return (
    <>

    <form className='note-create-form' onSubmit={handleSumbit}>
      <input name='title' type="text" placeholder='Enter title'/>
      <input name='description' type="text" placeholder='Enter description'/>
      <button>Create note</button>
    </form>
    <div className="notes">
      {
        notes.map(note=>{
         return <div className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={()=>{handleDeleteNote(note._id)}}>delete</button>
      </div>
        })
      }
      
    </div>
    </>
  )
}

export default App
