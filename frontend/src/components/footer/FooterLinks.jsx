import React from 'react'
import "./FooterLinks.scss"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterLinks = () => {
  return <>
      <section className='contact-secttion'>
        <div className='container contact'>
            <div className='contact-icon'>
            <FaFacebook className='i'/>
            <FaTwitter className='i'/>
            <FaInstagram className='i'/>
            <FaYoutube className='i'/>
            </div>
            <h2>Lets Talk?</h2>
            <a href="#home" className='btn btn-dark'> Make an Enquiry</a>
        </div>
      </section>
      <section className='footer-section'>
        <div className='footer-logo'>
            <img src="" alt="logo" />
        </div>
        <div className='footer-menu'>
            <p className='link-heading'>
                Features
            </p>
            <ul className='nav-ul footer-links'>
                <li>
                    <a href="#home">Lnik Shortening</a>
                </li>
                <li>
                    <a href="#home">Branded Links</a>
                </li>
                <li>
                    <a href="#home">Analytics</a>
                </li>
                <li>
                    <a href="#home">Blog</a>
                </li>
            </ul>
        </div>
      </section>
    </>

}

export default FooterLinks
