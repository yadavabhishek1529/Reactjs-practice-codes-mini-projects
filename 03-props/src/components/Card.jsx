// import React from 'react'

// const Card = (props) => {

//     return (
//         <div className="card">
//             <img src={props.img} alt="" />
//             <h1>{props.user},{props.age}</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <button>View Profile</button>
//         </div>
//     )
// }

// export default Card

// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className='card'>
//        <img src= {props.img} alt='' />
//        <h1>{props.user}, {props.age}</h1>
//        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod aliquid inventore illo suscipit .</p>
//        <button>view profile</button>
//     </div>
//   )
// }

// export default Card

import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src= {props.img} alt='' />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, libero. Illum mollitia cupiditate, </p>
        <button>view profile</button>
    </div>
  )
}

export default Card
