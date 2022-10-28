import React from 'react'
import '../Css/Main.css'
import shopping from '../img/shopping.png';
import lady from '../img/lady.png';

function Header() {
  return (
    <header className='header'>
      <div className='row'>
          <div className='col-1-of-2'>
            <div className='header__logo-box '>
              <div className='header__logo'>
                PaY<span className="highlight">Me</span><span className='period'>.</span>
              </div>
            </div>
            <div className='header__title u-margin-top'>
                <h1>Fast <span className="highlight">Secure</span> Reliable<br/>
                <span className="highlight"> Simple </span>
                </h1>
                <br/>
                <h4>A simpler and secure way of making payments.<br/> We'll handle your worldwide transactions, so you can fast-track global expansion.</h4>
                <a href='#' className='btn-text'>Learn More &darr;</a>
            </div>
          </div>
          <div className='col-1-of-2 '>
            <div className='header__image u-margin-top'>
              <div className='composition'>
                <img src={shopping} alt='' className='composition__photo composition__photo--p3' />
              </div>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header