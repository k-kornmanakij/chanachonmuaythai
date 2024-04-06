import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className='col-1'>
        {/* CNC's logo with homepage link */}
      </div>

      <div className='col-2'>
        <h2>Contact us</h2>
        <div className='content'>
          <div class="instagram">
            <i className='fa-brands fa-instagram'></i>
            <span class="text">@Chanachonmuaythai</span>
          </div>
          <div class="facebook">
            <i className='fa-brands fa-facebook'></i>
            <span class="text">Chanachon Muay Thai</span>
          </div>
          <div class="email">
            <i className='fa-regular fa-envelope'></i>
            <span class="email">sawasdee@chanachonmuaythai.co</span>
          </div>
        </div>
      </div>

      <div className='col-3'>
        <h2>Policy</h2>
        <a href='cancel'>Cancellation</a>
      </div>

      <div className='col-4'>
        <h2>Interested in our memberships</h2>
        <a href='#' className='trial-link'>
          <h4>1st Time Free Trial</h4>
        </a>
      </div>
    </div>

    /* <p>&copy; CopyRight Chanachon Muay Thai 2024</p> */
  )
}

export default Footer