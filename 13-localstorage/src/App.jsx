import React from 'react'

const App = () => {
  
  /*
  const user = {
    username : 'Abhishek',
    age : 18,
    city : 'Jaipur'
  }
  localStorage.setItem('user', JSON.stringify(user)) 
*/
/*
  const user = localStorage.getItem('user')
  console.log(user) 
  console.log(typeof(user)) 
*/
  const user = JSON.parse(localStorage.getItem('user')) //for retrieving to normal form 
  console.log(user)
  
  return (
    <div>App</div>
  )
}

export default App