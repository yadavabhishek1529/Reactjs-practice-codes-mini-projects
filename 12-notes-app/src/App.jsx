import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex p-10 lg:w-1/2 gap-4 flex-col items-start'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        {/* first input for heading */}
        <input 
          type='text' 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 font-medium w-full border-2 outline-none rounded' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        {/* second input for detailed content */}
        <textarea
          type='text' 
          placeholder='Enter details' 
          className='px-5 h-30 py-2 font-medium w-full flex items-start flex-row border-2 outline-none rounded' 
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className='bg-white active:scale-95 text-black font-medium px-5 py-2 outline-none w-full rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap justify-start items-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col Relative h-52 w-40 rounded-xl text-black pt-9 pb-5 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-3 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>delete</button>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
