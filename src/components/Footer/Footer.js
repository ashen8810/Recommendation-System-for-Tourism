import React from 'react';
import './Footer.css';
import logo from '../Header/websiteLogo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-section image image-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="footer-section name name-section">
        <h3>Traveling Lanka</h3>
        <div>
          <p className='footer-text'>Uncover hidden gems, embrace adventure, and create unforgettable memories in a world of wonders</p>
        </div>
        <div className="footer-copyright">
          &copy; 2023 All Rights Reserved
        </div>
      </div>

      <div className="footer-section navigation">
        <h3>Navigation</h3>
        <ul>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/Hotels'>Hotel</Link></li>
          <li><Link to = '/Places'>Place</Link></li>
          <li><Link to = '/About'>About Us</Link></li>
        </ul>
      </div>

      <div className="footer-section support">
        <h3>Support</h3>
        <ul>
          <li><Link to = '/FAQ'>FAQs</Link></li>
          <li> <Link to = '/Emergency'>Emergency</Link></li>
          <li><Link to = '/ContactUs'>ContactUs</Link></li>
        </ul>
      </div>

      <div className="footer-section social">
        <h3>Social</h3>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          <li><a href="https://www.youtube.com">YouTube</a></li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
