import React from 'react'
import logo from '../assest/logo.png'
import '../styles/Header.css'
import { NavLink, Link } from 'react-router-dom'
import { CiLocationOn } from 'react-icons/ci';
import { RiFacebookCircleFill} from 'react-icons/ri';
import { AiOutlineTwitter} from 'react-icons/ai';
import { FaLinkedinIn} from 'react-icons/fa';
import { BsInstagram} from 'react-icons/bs';
import { BsFillTelephoneFill} from 'react-icons/bs';
import { GiHamburgerMenu} from 'react-icons/gi';




const Headerr = () => {
  return (
    
<>
    {/* Desktop */}

    <>
    <div className="container-fluid sticked fixed-top">
      <div className="head_top">
        <div className="row">
          <div className="col-lg-2 col-sm-6 col-md-8">
            <div className='d-flex'>
              <div className="btn-square">
                <i className="text-mob text-white"><CiLocationOn /></i>
              </div>
              <p className="text-mob text-white">57/A, GREEN LANE, NYC</p>
            </div>
          </div>
          <div className="col-lg-8 col-sm-6 col-md-8">
            <div className='d-flex'>
              <div className="btn-square">
                <i className="text-mob text-white"><BsFillTelephoneFill /></i>
              </div>
              <p className="text-mob text-white">+10 (78) 367 3692</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-md-8">
            <div className='d-flex'>
              <div className="btn-square">
                <i className="text-white head_icon"><RiFacebookCircleFill /></i>
                <i className="text-white head_icon"><AiOutlineTwitter /></i>
                <i className="text-white head_icon"><FaLinkedinIn /></i>
                <i className="text-white head_icon"><BsInstagram /></i>
              </div>
              
            </div>
          </div>
        </div>
      </div>


      <nav className="navbar navbar-expand-lg  desktop">
        <div className="container-fluid">
          <NavLink className="nav-link " aria-current="page" to="/" >
          <a href="/">
            <img
              src={logo} className='img-fluid' alt="Logo">
</img></a>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/class">Class</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link desk" to="/home">Blog</Link>
                <Link className="nav-link mob" to="" data-bs-toggle="dropdown">Blog</Link>
                <div className="dropdown-menu bg-light rounded-0 m-0 text-dark">


                  <Link to="/blogshow" className="dropdown-item">Blog</Link>
                  <Link to="/tea" className="dropdown-item">Blog</Link>
                  <Link to="/HerbalTeawithmilk" className="dropdown-item">Blog</Link>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="">
                <NavLink className="btn_enroll" to="/login">Enroll Now</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>

      </>


    {/* Mobile */}

<nav className="navbar navbar-expand-lg mobile" style={{marginBottom:'10px'}}>
<div className="container-fluid">
  <a className="nav-link " aria-current="page" href="/" >
  <img 
   src={logo} className='img-fluid'  alt="Logo"
     >
        
     </img></a> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-white"> <GiHamburgerMenu/></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/class">Class</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link desk" href="/blog">Blog</a>
        <a className="nav-link mob" href="/" data-bs-toggle="dropdown">Blog</a>
        <div className="dropdown-menu  rounded-0 m-0 ">
                      
      
                    <a href="/milktea" className="dropdown-item">Blog</a>
                    <a href="/delightmilktea" className="dropdown-item">Blog</a>
                    <a href="/HerbalTeawithmilk" className="dropdown-item">Blog</a>
                    </div>
      </li>
     <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      <li className="menu_enroll">
        <a className="btn_enroll" href="/login">Enroll Now</a>
      </li>
    </ul>
  </div>
</div>
</nav>

    </>
  )
}

export default Headerr