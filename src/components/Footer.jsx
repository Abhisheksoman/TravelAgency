import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className="left">
                <div className="location">
                    <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }}  />
                    <div>
                        <p>123 Keeskey Road</p>
                        <h4>New York ,California</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />+918129666176</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />abhishekrajav842@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Us</h4>
                <p>"Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam"</p>
                <div className="social">
                    <FaFacebook size={20} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    <FaLinkedin size={20} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    <FaTwitter size={20} style={{ color: '#ffffff', marginRight: '1rem' }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer