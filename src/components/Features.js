import React from 'react'
import lady from '../img/lady.png';
import delivery from '../img/delivery.png'

function Features() {
  return (
    <div className='features__section'>
      <div className='features__section-title'>
        <h5 className='u-color-green'>Features</h5>
        <h3>Everything You Need In An Online Banking App.</h3>
      </div>
      
      <div className='row'>
        <div className='col-1-of-2 u-align-item'>
            <div className='header__image u-margin-top '>
              <div className='composition'>
                <img src={lady} alt='' className='composition__photo composition__photo--p3' />
              </div>
            </div>
        </div>
        <div className='col-1-of-2 u-margin-top-text u-align-text-left'>
          <h2 className='u-margin-bottom-text '>Make payments using &nbsp; <span className="highlight">Crypto!</span></h2>
          <h4>Yep! you heard us right. We support crypto <br/>currencies which provide a simpler and secure way<br/> of making payments.We'll handle your worldwide <br/>transactions, so you can fast-track global expansion.</h4>
        </div>
      </div>

      <div className='row'>
      <div className='col-1-of-2 u-margin-top-text u-align-text'>
          <h2 className='u-margin-bottom-text'>Fast &nbsp; <span className="highlight"> Delivery</span> of payments</h2>
          <h4>Yep! you heard us right. We support crypto <br/>currencies which provide a simpler and secure way<br/> of making payments.We'll handle your worldwide <br/>transactions, so you can fast-track global expansion.</h4>
        </div>
        <div className='col-1-of-2'>
        <div className='header__image u-margin-top'>
              <div className='composition'>
                <img src={delivery} alt='' className='composition__photo composition__photo--p3' />
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Features