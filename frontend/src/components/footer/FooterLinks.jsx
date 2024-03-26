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
    </>

}

export default FooterLinks
