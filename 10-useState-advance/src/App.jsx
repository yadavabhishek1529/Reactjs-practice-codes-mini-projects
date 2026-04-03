/*
import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Abhishek', age:20})

  const btnClicked= () => {
    const newNum = {...num}
    newNum.user = 'Abhinav'
    newNum.age = 22
    setNum(newNum)
    console.log(num.user,num.age)
  }


  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click me!</button>
    </div>
  )
}

export default App
*/

import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState([10,20,30])

  const btnClicked= () => {
    const newNum = [...num]
    newNum.push(40)
    setNum(newNum)
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click me!</button>
    </div>
  )
}

export default App