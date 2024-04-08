import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className='col-1'>
        <img className='logo' src='/Logo-CHANACHON.png' alt='Chanachon Logo' />
      </div>
      <div className='col-2'>
        <h2>Contact us</h2>
        <div className='content'>

          <div class="instagram">
            <a href="https://www.instagram.com/chanachonmuaythai/" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands fa-instagram'></i>
              <span class="text">@Chanachonmuaythai</span>
            </a>
          </div>

          <div class="facebook">
            <a href="https://www.facebook.com/profile.php?id=61557654986425" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands fa-facebook'></i>
              <span class="text">Chanachon Muay Thai</span>
            </a>
          </div>

          <div class="email">
            <a href="mailto:sawasdee@chanachonmuaythai.co" target="_blank" rel="noopener noreferrer">
              <i className='fa-regular fa-envelope'></i>
              <span class="email">sawasdee@chanachonmuaythai.co</span>
            </a>
          </div>
        </div>
      </div>

      <div className='col-3'>
        <h2>Policy</h2>
        <a href='cancel'>Cancellation</a>
      </div>

      <div className='col-4'>
        <h2>Interested in our memberships</h2>
        <a href='https://chanachonmuaythai.sites.zenplanner.com/freeTrial.cfm' className='trial-link'>
          <h4>1st Time Free Trial</h4>

        </a>
      </div>
      {/* <p className='copyright'>&copy; CopyRight Chanachon Muay Thai 2024</p> */}
    </div>


  )
}

export default Footer