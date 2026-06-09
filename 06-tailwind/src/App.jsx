import React from 'react'

const App = () => {
  return (
    // <div className='flex flex-col items-center justify-center space-y-6 mt-2'>
    //   <div className='h-16 w-16 rounded-full bg-blue-500'></div>
    //   <div className='h-16 w-16 rounded-full bg-orange-500'></div>
    //   <div className='h-16 w-16 rounded-full bg-green-500'></div>
    // </div>

  // <div class="grid">
  //   <div>1</div>
  //   <div>2</div>
  //   <div>3</div>
  // </div>
  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

  <div className="p-4 bg-white shadow rounded">
    Product 1
  </div>

  <div className="p-4 bg-white shadow rounded">
    Product 2
  </div>

  <div className="p-4 bg-white shadow rounded">
    Product 3
  </div>

  <div className="p-4 bg-white shadow rounded">
    Product 4
  </div>

</div>

  )
}

export default App