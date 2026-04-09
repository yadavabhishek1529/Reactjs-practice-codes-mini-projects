import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
/*
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
  }
*/

/*
const getData = async() =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  
  console.log(data)
}
*/
/*
const getData = async() => {
  const response = await axios.fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  console.log(response.data)
}
*/
const [data, setData] = useState([])
const getData = async () => {
  const response = await axios.get('https://picsum.photos/id/870/200/300?grayscale&blur=2')
  setData(response.data)
}
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App