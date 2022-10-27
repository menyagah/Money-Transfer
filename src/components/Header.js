import React from 'react'
import '../Css/Main.css'

function Header() {
  return (
    <header className='header'>
      <div className='row'>
          <div className='col-1-of-2'>
            <div className='header__title'>
                <h1>Fast <span className="highlight">Secure</span> Reliable<br/>
                <span className="highlight"> Simple </span>
                </h1>
                <br/>
                <h4>A simpler and secure way of making payments.</h4>
            </div>
          </div>
          <div className='col-1-of-2'>
            col 1 of 2
          </div>
      </div>
    </header>
  )
}

export default Header