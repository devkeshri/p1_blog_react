import React from 'react'
import "../styles/Home.css"
import Slider from './Slider';
import Countdown from './Countdown';
import '../styles/Countdown.css'





function Homeee() {
  return (
    <>
      <section className="first_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hero__caption">
                <h1 className="">Quality<br /> Learning</h1>
                <h2 className="">For Every Child</h2>
                <a href="/" className="btn hero-btn">Explore classes</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <h2 className="" style={{ color: "#423F8D" }}>Welcome to our <span style={{ color: "#ED078B" }}>Kindergarten</span>
              </h2>
              <p className="text_our">Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.</p>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 about-caption">
              <div className='d-flex inter_div'>
                <div className="second_headicon">
                  <img className="img-fluid" src={require('../assest/svg_1.png')} alt="" />
                </div>
                <p className="head_int" style={{ color: "#1F97D4" }}>Inter School Sports<br /><span className="text_wrd" style={{ color: "#4255A4" }}>The words you use in your written <br />communica speak volumes.</span></p>

              </div>
              <div className='d-flex inter_div'>
                <div className="second_headicon">
                  <img src={require('../assest/svg_1.png')} alt="" />
                </div>
                <p className="head_int" style={{ color: "#FBCE0F" }}>Inter School Sports<br /><span className="text_wrd" style={{ color: "#4255A4" }}>The words you use in your written <br />communica speak volumes.</span></p>

              </div>
              <div className='d-flex inter_div'>
                <div className="second_headicon">
                  <img src={require('../assest/svg_1.png')} alt="" />
                </div>
                <p className="head_int" style={{ color: "#12D9DF" }}>Inter School Sports<br /><span className="text_wrd" style={{ color: "#4255A4" }}>The words you use in your written <br />communica speak volumes.</span></p>

              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-11 col-12">
              <img className="img-fluid" src={require('../assest/about2.png')} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="third_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
              <h2 className="slide_head" style={{ color: "#423F8D" }}>Classes We Offer
              </h2>
              <p className="text_our">Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.</p>
            </div>
          </div>

          {/* desktop slider start */}
          
          <div className="desktopslider1">
          <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                  <div className="card" style={{ width: "24rem" }}>
                    <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="top_txt">
                        <h3><a href="/" tabindex="-1">Intelligent Challenge</a></h3>
                        <p className="card_ptxt">The words you use in your written communica speak volumes.</p>

                      </div>
                      <hr />
                      <div className="row bot_txt">
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font1">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font2">30</p>
                          <p className="p_agetxt">Classes</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font3">10/h</p>
                          <p className="p_agetxt">Class Price</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card" style={{ width: "24rem" }}>
                    <img src={require('../assest/class-img2.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="top_txt">
                        <h3><a href="/" tabindex="-1">Intelligent Challenge</a></h3>
                        <p className="card_ptxt">The words you use in your written communica speak volumes.</p>

                      </div>
                      <hr />
                      <div className="row bot_txt">
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font1">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font2">3-0</p>
                          <p className="p_agetxt">Classes</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font3">10/h</p>
                          <p className="p_agetxt">Class Price</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card" style={{ width: "24rem" }}>
                    <img src={require('../assest/class-img3.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="top_txt">
                        <h3><a href="/" tabindex="-1">Intelligent Challenge</a></h3>
                        <p className="card_ptxt">The words you use in your written communica speak volumes.</p>

                      </div>
                      <hr />
                      <div className="row bot_txt">
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font1">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font2">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font3">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item active">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                  <div className="card" style={{ width: "24rem" }}>
                    <img src={require('../assest/class-img3.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="top_txt">
                        <h3><a href="/" tabindex="-1">Intelligent Challenge</a></h3>
                        <p className="card_ptxt">The words you use in your written communica speak volumes.</p>

                      </div>
                      <hr />
                      <div className="row bot_txt">
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font1">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font2">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font3">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card" style={{ width: "24rem" }}>
                    <img src={require('../assest/class-img2.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="top_txt">
                        <h3><a href="/" tabindex="-1">Intelligent Challenge</a></h3>
                        <p className="card_ptxt">The words you use in your written communica speak volumes.</p>

                      </div>
                      <hr />
                      <div className="row bot_txt">
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font1">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font2">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font3">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card" style={{ width: "24rem" }}>
                    <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="top_txt">
                        <h3><a href="/" tabindex="-1">Intelligent Challenge</a></h3>
                        <p className="card_ptxt">The words you use in your written communica speak volumes.</p>

                      </div>
                      <hr />
                      <div className="row bot_txt">
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font1">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font2">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4">
                          <p class="color-font3">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          </div>

          {/* desktop slider end */}

          {/* mobile slider */}

          <div class="mobileslider1">
<div id="mobslide1" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                  <div className="card" style={{ width: "30rem" }}>
                    <img src={require('../assest/class-img2.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="top_txt">
                        <h3><a href="/" tabindex="-1">Intelligent Challenge</a></h3>
                        <p className="card_ptxt">The words you use in your written communica speak volumes.</p>

                      </div>
                      <hr />
                      <div className="row bot_txt">
                        <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                          <p class="color-font1">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                          <p class="color-font2">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                          <p class="color-font3">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  
                </div>
              </div>

              <div className="carousel-item active">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                  <div className="card" style={{ width: "30rem" }}>
                    <img src={require('../assest/class-img3.png')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="top_txt">
                        <h3><a href="/" tabindex="-1">Intelligent Challenge</a></h3>
                        <p className="card_ptxt">The words you use in your written communica speak volumes.</p>

                      </div>
                      <hr />
                      <div className="row bot_txt">
                        <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                          <p class="color-font1">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                          <p class="color-font2">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                          <p class="color-font3">3-5</p>
                          <p className="p_agetxt">Age Group</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#mobslide1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#mobslide1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div> 

          {/* mobile slider end */}

          <div class="row">
            <div class="col-lg-12">
              <div class="browse-all text-center mt-30">
                <a href="/" class="border-btn">More Classes</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="fourth_sec">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-9">
              <div class="date-wrapper">
                <div class="section-tittle text-center mb-30">
                  <span class="span">18 Jan 2021</span>
                  <h2>Drawing Event</h2>
                  <p>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today moving in fourth.</p>
                  <a href="/" class="btn mt-10">View Event</a>
                </div>
                <Countdown/>


              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="fifth_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
              <h2 className="slide_head" style={{ color: "#423F8D" }}>Expert Teachers
              </h2>
              <p className="text_our">Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</p>
            </div>
          </div>

          

          <Slider/>

        </div>
      </section>

    
      <section className="six_sec client pt-3">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 sixsec_slide">
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              
    <div className="carousel-inner">
      <div className="carousel-item">
        <div className="row justify-content-center">
          <div className="t-card">
          <img className="img-fluid testislide_img" src={require('../assest/testimonial.png')} alt="" />
        <p className="lh-lg">"Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>

                    <div className='d-flex inter_div justify-content-center'>
                <div className="bot_testislide">
                  <img className="img-fluid" src={require('../assest/testi-1.png')} alt="" />
                </div>
                <h4 className="head_testislide" style={{ color: "#ED078B" }}>Sunaina Samuel <br/>
                <span className="txt_testislide" style={{ color: "#57667e" }}>Associate Software Engineer</span></h4>

              </div>

                  </div>
                </div>
                <div className="carousel-item active">
        <div className="row justify-content-center">
          <div className="t-card">
          <img className="img-fluid testislide_img" src={require('../assest/testimonial.png')} alt="" />
        <p className="lh-lg">"Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>

                    <div className='d-flex inter_div justify-content-center'>
                <div className="bot_testislide">
                  <img className="img-fluid" src={require('../assest/testi-1.png')} alt="" />
                </div>
                <h4 className="head_testislide" style={{ color: "#ED078B" }}>Sunaina Samuel <br/>
                <span className="txt_testislide" style={{ color: "#57667e" }}>Associate Software Engineer</span></h4>

              </div>

                  </div>
                </div>          
                <div className="controls push-right">
<button className="carousel-control-prevv" type="button" href="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-nextt" type="button" href="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            
              </div>
              </div>
            </div>
            </div>
            </div>
  </div>

      {/* six section img slider code start */}

          <div className="container-fluid">
          <div className="container-fluid">
            <div id="devqq" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper  d-flex  justify-content-around">
                  <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra1.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                    <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra3.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                    <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra4.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                    <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra3.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                    <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra4.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                  
                </div>
              </div>

              <div className="carousel-item">
                <div className="card-wrapper d-flex  justify-content-around">
                  <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra1.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                    <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra3.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                    <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra4.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                    <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra3.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>
                    <div className="card_d" style={{ width: "100%" }}>
                    <img src={require('../assest/instra4.png')} className="card_d-img-top" alt="..." />
                    {/* <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
                    <p className="txt_exp">Sports Instructor</p> */}
                    </div>

                </div>
              </div>

             <button className="carousel-control-prev" type="button" data-bs-target="#devqq" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#devqq" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          </div>
          </div>

  {/* six section img slider code end */}          
        

            

  </section>
  



    </>
  )
}

export default Homeee
