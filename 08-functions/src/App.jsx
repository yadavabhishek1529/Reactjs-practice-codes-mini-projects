 /*import React from 'react'

const App = () => {

  function inputChanging(val){
    console.log(val)
  }
  return (
    <div>
      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }}
      type='text' placeholder='Enter name' />
      <button>explore this</button>
    </div>
  )
}

export default App  
*/
/*
import React from 'react'

const App = () => {


  return (
  <div>
    <div onMouseMove={(elem)=>{
      console.log(elem.clientX)
  }} className='box'>

    </div>
  </div>  
  )
}

export default App
*/

import React from 'react'

const App = () => {

  const pageScrolling = (elem) => {
     if(elem>0){
        console.log("sidha scrolling")
      }else{
        console.log("ulta scrolling")
      }
    // console.log("Page Scrolling...at speen",elem)
  }

  return (
    <div onWheel={(elem) => {

      pageScrolling(elem.deltaY);
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App

