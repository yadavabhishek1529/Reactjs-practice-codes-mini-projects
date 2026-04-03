import React, { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('')
  const submitHandler = (elem)=> {
    elem.preventDefault()
    console.log("Form submitted by",title)
    setTitle('')
  }

  return (
    <div>
    <form onSubmit={(elem) => {
      submitHandler(elem)
    }}>
      <input type='text' 
      placeholder='Enter your name' 
      value={title}
      onChange={(elem) => {
        //console.log("inputing....")
        setTitle(elem.target.value);
      }}
      />
      <button>Submit</button>
    </form>
  </div>
  )
}

export default App
