import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h3>Practicing React-router-dom concept</h3>
            <div>
                <Link to={'/'} >Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'contact'}>Contact</Link>
                <Link to={'/Product'}>Product</Link>
            </div>
    </div>
  )
}

export default Navbar