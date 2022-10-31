import React, { useEffect, useRef } from 'react'
import lady from '../img/lady.png';
import delivery from '../img/delivery.png'

function Features() {

  return (
    <div className='features__section'>
      <div className='features__section-title'>
        <div className='Features__section-secondary'>
          <h2 className='u-color-green'>Features</h2>
        </div>
        
        <h3>Everything You Need In An Online Banking App.</h3>
      </div>
      
      <div className='row u-reverse-row'>
        <div className='col-1-of-2 u-align-item'>
            <div className='feature__image u-margin-top '>
              <div className='composition'>
                <img src={lady} alt='' className='composition__photo composition__photo--p3' />
              </div>
            </div>
        </div>
        <div className='col-1-of-2 u-margin-top-text-1 u-align-text'>
          <h4 className='u-margin-bottom-text '>Make payments using &nbsp; <span className="highlight">Crypto!</span></h4>
          <p>Yep! you heard us right. We support crypto currencies which provide a simpler and secure way of making payments.We'll handle your worldwide transactions, so you can fast-track global expansion.</p>
        </div>
      </div>

      <div className='row'>
      <div className='col-1-of-2 u-margin-top-text u-align-text'>
          <h4 className='u-margin-bottom-text'>Fast &nbsp; <span className="highlight"> Delivery</span> of payments</h4>
          <p>Yep! you heard us right. We support crypto currencies which provide a simpler and secure way of making payments.We'll handle your worldwide transactions, so you can fast-track global expansion.</p>
        </div>
        <div className='col-1-of-2'>
        <div className='feature__image u-margin-top'>
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