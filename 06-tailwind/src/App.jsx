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

// <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

//   <h2 className="font-bold text-xl">
//     Product
//   </h2>

//   <p>$99</p>

// </div>

// <div class="relative w-64 h-64 bg-gray-200">

//   <div class="absolute top-0 right-0 bg-red-500 text-white p-2">
//     New
//   </div>

// </div>
// <button
//   className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full"
// >
//   ↑
// </button> 

// <div class="relative">

//   <div class="absolute z-10">
//     Box 1
//   </div>

//   <div class="absolute z-20">
//     Box 2
//   </div>

// </div>

// <nav className="sticky top-0 z-50 bg-white shadow">

//   <div className="flex justify-between items-center p-4">

//     <h1 className="font-bold text-xl">
//       MyStore
//     </h1>

//     <ul className="flex gap-6">
//       <li>Home</li>
//       <li>Products</li>
//       <li>Contact</li>
//     </ul>

//   </div>

// </nav>

// <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">

//   <h2 className="font-bold text-xl">
//     Tailwind CSS
//   </h2>

//   <p className="mt-2 text-gray-500">
//     Learn modern web development.
//   </p>

// </div>
// <input
//   class="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
// />


// <input
//   class="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
// />

// <textarea
//   class="w-full border p-3 rounded-lg"
//   rows="4"
// ></textarea>

// <select class="border p-3 rounded-lg">

//   <option>India</option>

//   <option>USA</option>

//   <option>Canada</option>

// </select> 

//Checkbox
// <div class="flex items-center gap-2">

//   <input
//     type="checkbox"
//     class="w-4 h-4"
//   />

//   <label>
//     Accept Terms
//   </label>
// </div>

//Radio Buttons
// <div class="flex gap-4">

//   <label>
//     <input type="radio" name="gender" />
//       Male
//   </label>

//   <label>
//     <input type="radio" name="gender" />
//       Female
//   </label>

// </div>

//Login form 
// <div class="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-xl">

//   <h2 class="text-2xl font-bold mb-5">
//     Login
//   </h2>

//   <input
//     type="email"
//     placeholder="Email"
//     class="w-full border p-3 rounded-lg mb-4"
//   />

//   <input
//     type="password"
//     placeholder="Password"
//     class="w-full border p-3 rounded-lg mb-4"
//   />

//   <button
//     class="w-full bg-blue-500 text-white p-3 rounded-lg"
//   >
//     Login
//   </button>

// </div> 

//Building forms with flex
// <div class="flex gap-4">

//   <input
//     type="text"
//     placeholder="First Name"
//     class="w-1/2 border p-3 rounded-lg"
//   />

//   <input
//     type="text"
//     placeholder="Last Name"
//     class="w-1/2 border p-3 rounded-lg"
//   />

// </div>

//Building forms with grid
// <div class="grid grid-cols-2 gap-4">

//   <input
//     class="border p-3 rounded-lg"
//     placeholder="First Name"
//   />

//   <input
//     class="border p-3 rounded-lg"
//     placeholder="Last Name"
//   />
// </div> 

//Dark-Mode
// <div class="bg-white dark:bg-black">

//   <h1 class="text-black dark:text-white">
//     Hello
//   </h1>

// </div>
//Another Example
// <button
//   class="bg-blue-500 dark:bg-blue-700 text-white"
// >
//   Button
// </button>

//Reusable-components : In react you'll create reusable components.
  // <button
  //     className="bg-blue-500 text-white px-4 py-2 rounded-lg"
  //   >
  //     {text}
  //   </button>


//Hero Section Common Interview Project
// <section
//   class="flex flex-col items-center justify-center h-screen"
// >

//   <h1
//     class="text-5xl font-bold"
//   >
//     Learn Tailwind CSS
//   </h1>

//   <p
//     class="mt-4 text-gray-500"
//   >
//     Build modern websites faster.
//   </p>

//   <button
//     class="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg"
//   >
//     Get Started
//   </button>

// </section> 

//Footer section
// <footer
//   class="bg-gray-900 text-white p-8"
// >

//   <div
//     class="flex justify-between"
//   >

//     <div>
//       Logo
//     </div>

//     <div>
//       Contact
//     </div>

//   </div>

// </footer> 

//Dashboard sidebar
// <div class="flex">

//   <aside
//     class="w-64 h-screen bg-gray-800 text-white p-5"
//   >

//     <ul class="space-y-4">

//       <li>Dashboard</li>

//       <li>Users</li>

//       <li>Settings</li>

//     </ul>

//   </aside>

//   <main class="flex-1 p-5">

//     Dashboard Content

//   </main>

// </div>

//Mini-project registration form
<div class="max-w-md mx-auto p-6 shadow-lg rounded-xl">

  <h2 class="text-2xl font-bold mb-4">
    Register
  </h2>

  <div class="space-y-4">

    <input
      placeholder="Name"
      class="w-full border p-3 rounded-lg"
    />

    <input
      placeholder="Email"
      class="w-full border p-3 rounded-lg"
    />

    <input
      placeholder="Password"
      class="w-full border p-3 rounded-lg"
    />

    <button
      class="w-full bg-blue-500 text-white p-3 rounded-lg"
    >
      Register
    </button>

  </div>

</div>
  )
}

export default App