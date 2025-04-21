import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookSquare,FaInstagramSquare,FaTwitter } from "react-icons/fa";
import '../components/Footer.css';
import {Link} from 'react-scroll'

function  Footer() {
  return (
    
    <footer class="footer">
    <div class="social-icons">
      <a href="#"><FaFacebookSquare className='facebook'/></a>
      <a href="#"><FaInstagramSquare className='instagram'/></a>
      <a href="#"><FaTwitter className='twitter'/></a>
    </div>

    <div class="footer-links">
    <Link to='header'><span>&#9962;</span> Home</Link>
      <Link to='about'><span>👤</span> About Us</Link>
      <Link to='contact'><span>📞</span> Contact Us</Link>
      <Link to='disclaimer'><span>⚠️</span> Disclaimer</Link>
    </div>

    <p>Copyright © PJ <strong>RummyBonusApp.Com</strong> All Rights Reserved</p>
  </footer>

)
}

export default Footer;