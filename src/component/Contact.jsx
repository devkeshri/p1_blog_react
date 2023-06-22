import React from 'react'
import "../styles/Contact.css"
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdPhonePortrait } from 'react-icons/io';
import { HiOutlineMailOpen } from 'react-icons/hi';

function Contact() {
  return (
    <>
      <section className="first_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-12">
              <div className="class_head">
                <h1 className="">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="contact_form">
  <div className="container">
  <div className="row">
  <div className="col-12">
  <h2 className="contact-title">Get in Touch</h2>
  </div>
  <div className="col-lg-8">
  <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
  <div className="row">
  <div className="col-12">
  <div className="form-group">
  <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea>
  </div>
  </div>
  <div className="col-sm-6">
  <div className="form-group">
  <input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
  </div>
  </div>
  <div className="col-sm-6">
  <div className="form-group">
  <input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
  </div>
  </div>
  <div className="col-12">
  <div className="form-group">
  <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
  </div>
  </div>
  </div>
  <div className="form-group mt-3">
  <button type="submit" className="button button-contactForm boxed-btn">Send</button>
  </div>
  </form>
  </div>
  <div className="col-lg-3 offset-lg-1">
  <div className="media contact-info d-flex inter_div">
  <span className="contact-info__icon" ><AiOutlineHome/><i className="ti-home" ></i></span>
  <div className="media-body">
  <h3>Buttonwood, California.</h3>
  <p>Rosemead, CA 91770</p>
  </div>
  </div>
  <div className="media contact-info d-flex inter_div">
  <span className="contact-info__icon"><IoMdPhonePortrait/><i className="ti-tablet"></i></span>
  <div className="media-body">
  <h3>+1 253 565 2365</h3>
  <p>Mon to Fri 9am to 6pm</p>
  </div>
  </div>
  <div className="media contact-info d-flex inter_div">
  <span className="contact-info__icon"><HiOutlineMailOpen/><i className="ti-email"></i></span>
  <div className="media-body">
  <h3>support@colorlib.com</h3>
  <p>Send us your query anytime!</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
 
      </>
  )
}

export default Contact