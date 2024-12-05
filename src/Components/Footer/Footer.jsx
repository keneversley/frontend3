import React from 'react'
import './Footer.css'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src="https://globalasset1.s3.us-east-2.amazonaws.com/prestigelogo.JPG" alt="" />
            <p>HOME</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            
            <li>About</li>
            <li>Contact</li>
        </ul>
      
             <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href="https://www.instagram.com/prestigeglobalconcierge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <img src="https://globalasset1.s3.us-east-2.amazonaws.com/instagram_icon.png" alt="Instagram Icon" />
                </a>
            </div>

            <div className="footer-icons-container">
                <a href="https://wa.me/13055705232" target="_blank" rel="noopener noreferrer">
                    <img src="https://globalasset1.s3.us-east-2.amazonaws.com/whatsapp_icon.png" alt="WhatsApp Icon" />
                </a>
            </div>
        </div>
        <div className="footer-copytight">
           <hr />
           <p>Copyright @ 2024 All Right Reserved.</p> 
        </div>
    </div>
  )
}

export default Footer
