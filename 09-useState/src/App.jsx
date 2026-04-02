/*
import React, { useState } from "react"

const App = () => {
  const [Name, setName] = useState('Abhishek')
  return (
    <h1>Hello, my name is {Name} yadav</h1>
  )
}

export default App  
*/

/*
import React, { useState } from "react"


const App = () => {
  const [Age, setAge] = useState(18)
  const [userName, setuserName] = useState('Abhishek Yadav')
  const [users, setUsers] = useState([10,20,30])

  function changeData() {
    setAge(20)
    setuserName('Abhi yadhuwanshi')
    setUsers(40,50,60)
  }
  return (
    <div>
      <h1>Age is : {Age} years old!</h1>
      <h1>UserName is : {userName} <br/>value of users is : {users}<br/></h1>
      <button onClick={changeData}>click me</button>
    </div>
  )   
} 

export default App
*/

// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   function increaseNum() {
//     setNum(num+1)
//   }
//   function decreaseNum() {
//     setNum(num-1)
//   }
//   function JumpByFive() {
//     setNum(num+5)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//       <button onClick={JumpByFive}>Jump by 5</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)

  function increaseNum() {
    setNum(Num+1)
  }
  function decreaseNum() {
    setNum(Num-1)
  }
  function increaseByFive () {
    setNum(Num+5)
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={increaseByFive}>increase by 5</button>
    </div>
  )
}

export default App