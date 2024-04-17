import React from 'react'
import './Footer.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className='row-1'>
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
          <CustomLink to="/cancellationpolicy">Cancellation</CustomLink>
        </div>

        <div className='col-4'>
          <h2>Interested in our memberships</h2>
          <a href='https://chanachonmuaythai.sites.zenplanner.com/freeTrial.cfm' className='trial-link'>
            <h4>1st Time Free Trial</h4>
          </a>
        </div>
      </div>
      <div className="row-2">
        <p>&copy; CopyRight Chanachon Muay Thai 2024</p>
      </div>
    </div>


  )
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true })
  return (
    <h3 className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </h3>
  )
}

export default Footer