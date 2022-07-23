import React from 'react'

function Navbar({ brand }) {
  return (
    <nav className='navbar navbar-light bg-black'>
      <div className='container justify-content-center'>
        <a className='navbar-brand text-uppercase' href='/' style={{color:"white"}}>
        {brand}
        </a>
      </div>
    </nav>
  )
}

export default Navbar