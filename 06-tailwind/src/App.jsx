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
  
// {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

//   <div className="p-4 bg-white shadow rounded">
//     Product 1
//   </div>

//   <div className="p-4 bg-white shadow rounded">
//     Product 2
//   </div>

//   <div className="p-4 bg-white shadow rounded">
//     Product 3
//   </div>

//   <div className="p-4 bg-white shadow rounded">
//     Product 4
//   </div>

// </div> */}

// Responsive Navbar 
// <nav className='flex justify-between items-center p-4'>

//   <h1 className='text-xl font-bold'>
//     Logo
//   </h1>

//   <ul className='hidden md:flex gap-6'>
//     <li>Home</li>
//     <li>About</li>
//     <li>Services</li>
//     <li>Contact</li>
//   </ul>

// </nav>

// <section className="p-8">

//   <h1 className="text-3xl font-bold mb-6">
//     Featured Products
//   </h1>

//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//     <div className="shadow p-4 rounded-lg">
//       <h2 className="font-semibold">Product 1</h2>
//       <p>$99</p>
//     </div>

//     <div className="shadow p-4 rounded-lg">
//       <h2 className="font-semibold">Product 2</h2>
//       <p>$149</p>
//     </div>

//     <div className="shadow p-4 rounded-lg">
//       <h2 className="font-semibold">Product 3</h2>
//       <p>$199</p>
//     </div>

//     <div className="shadow p-4 rounded-lg">
//       <h2 className="font-semibold">Product 4</h2>
//       <p>$249</p>
//     </div>

//   </div>

// </section>

// <button className="bg-blue-500 text-white px-4 py-2 hover:bg-gray-700">
//   Hover Me
// </button> 

// <p class="text-black hover:text-red-500">
//   Hover Over Me
// </p> 

// <div class="hover:scale-110">
//   Card
// </div>

// <button class="bg-blue-500 hover:bg-green-500 transition duration-1000">
//   Button
// </button> 

// <img
//   class="hover:rotate-12 transition duration-300"
//   src="https://img.magnific.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid&w=740&q=80"
// /> 

// <div class="hover:-translate-y-2 transition">
//   Card
// </div> 

<div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <h2 className="font-bold text-xl">
    Product
  </h2>

  <p>$99</p>

</div>
  )
}

export default App
