import React from 'react'
import "../styles/Footer.css"
import logo from '../assest/logo.png'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { FaPinterestP } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <section className="footer_bg">
      <div className="container  footer mt-5 py-5">
        
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 foot_col ">
            <a href="/"><img
              src={logo} className='img-fluid' alt="Logo">
</img></a>
              <p className="mb-3 ">
                <a className="btn btn-link" href="/"></a>Users and submit their own items. You can create different packages and by connecting with your PayPal or Stripe account charge users for registration.</p>
                <div className="d-flex pt-3">
                <a className=""><i class=""><AiOutlineTwitter /></i></a>
                <a className=""><i class=""><GrFacebookOption /></i></a>
                <a className=""><i class=""><FaPinterestP /></i></a>
                <a className=""><i class=""><FaLinkedinIn /></i></a>
                
                
              </div>
              
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12 foot_col">
              <h4 className="text-white mb-4">Quick Links</h4>
              <a className="btn btn-link" href="/aboutus"> About Us</a>
              <a className="btn btn-link" href="/contactus"> Contact Us</a>
              <a className="btn btn-link" href="/gallary">Gallery</a>
              
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12 foot_coll">
              <h4 className="text-white mb-4">About Us</h4>
              <a className="btn btn-link" href="/aboutus"> Our Team</a>
              <a className="btn btn-link" href="/contactus">Privacy Policy</a>
              <a className="btn btn-link" href="/gallary">Testimonial</a>
              
            </div>
          </div>
        
      </div>
      {/* <!-- Copyright --> */}
      <div className="text-center copyright" >
      Copyright ©2023 All rights reserved | This template is made with by 
        <a className="copy_txt" href="/">Colorlib</a>
      </div>
      {/* <!-- Copyright --> */}
      <a href="#" className=" arrow  rounded-circle back-to-top l-5"><i><AiOutlineArrowUp /></i></a>
      </section>
    </>
  )
}

export default Footer;