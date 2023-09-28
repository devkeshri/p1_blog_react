import React, { useState,useEffect } from 'react'
import "../styles/Home.css"
import Slider from './Slider';
import Countdown from './Countdown';
import '../styles/Countdown.css'
import axios from "axios"
import {homedataurl} from "../API/Api.js"


// const url = "http://localhost:5000/home/getdata"





function Homeee() {
  const [Section1Data, setSection1Data] = useState([]);
  const [Section2Data, setSection2Data] = useState([]);
  const [box1Data, setbox1Data] = useState([]);
  const [box2Data, setbox2Data] = useState([]);
  const [box3Data, setbox3Data] = useState([]);
  const [section2imgData, setsection2imgData] = useState([]);
  const [section3Data, setsection3Data] = useState([]);
  const [slider1Data, setslider1Data] = useState([]);
  const [contentData, setcontentData] = useState([]);
  const [content2Data, setcontent2Data] = useState([]);
  const [content3Data, setcontent3Data] = useState([]);
  const [section3Button, setsection3Button] = useState([]);
  const [section4, setsection4] = useState([]);
  const [section5, setsection5] = useState([]);
  const [testimonial, settestimonial] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(homedataurl);
        // Assuming the API response is an object with a 'data' property containing an array of objects
        if (response.data && response.data.data && response.data.data.length > 0) {
          const firstDataObject = response.data.data[0];
          setSection1Data(firstDataObject)
          setSection2Data(response.data.data[1])
          setbox1Data(response.data.data[2])
          setbox2Data(response.data.data[3])
          setbox3Data(response.data.data[4])
          setsection2imgData(response.data.data[5])
          setsection3Data(response.data.data[6])
          setslider1Data(response.data.data[7])
          setcontentData(response.data.data[8])
          setcontent2Data(response.data.data[9])
          setcontent3Data(response.data.data[10])
          setsection3Button(response.data.data[11])
          setsection4(response.data.data[12])
          setsection5(response.data.data[13])
          settestimonial(response.data.data[18])
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
   
      <section className="first_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hero__caption">
                <h1 className="">{Section1Data.heading}</h1>
                <h2 className="">{Section1Data.subheading}</h2>
                <a href="/" className="btn hero-btn">{Section1Data.buttonText}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <h2 className="" style={{ color: "#423F8D" }}>{Section2Data.heading} <span style={{ color: "#ED078B" }}>{Section2Data.subheading}</span>
              </h2>
              <p className="text_our">{Section2Data.massage}</p>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 about-caption">
              <div className='d-flex inter_div'>
                <div className="second_headicon">
                  <img className="img-fluid" src={require('../assest/svg_1.png')} alt="" />
                </div>
               <pre> <p className="head_int" style={{ color: "#1F97D4" }}>{box1Data.heading}<br /><span className="text_wrd" style={{ color: "#4255A4" }}>{box1Data.massage} </span></p></pre>

              </div>
              <div className='d-flex inter_div'>
                <div className="second_headicon">
                  <img className="img-fluid" src={require('../assest/svg_1.png')} alt="" />
                </div>
               <pre> <p className="head_int" style={{ color: "#FBCE0F" }}>{box2Data.heading}<br /><span className="text_wrd" style={{ color: "#4255A4" }}>{box2Data.massage} </span></p></pre>

              </div>
              <div className='d-flex inter_div'>
                <div className="second_headicon">
                  <img className="img-fluid" src={require('../assest/svg_1.png')} alt="" />
                </div>
                <pre><p className="head_int" style={{ color: "#12D9DF" }}>{box3Data.heading}<br /><span className="text_wrd" style={{ color: "#4255A4" }}>{box3Data.massage} </span></p></pre>

              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-11 col-12">
              <img className="img-fluid" src={section2imgData.image} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="third_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
              <h2 className="slide_head" style={{ color: "#423F8D" }}>{section3Data.heading}
              </h2>
              <p className="text_our">{section3Data.massage}</p>
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
                          <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
                          <p className="card_ptxt">{slider1Data.massage}</p>

                        </div>
                        <hr />
                        <div className="row bot_txt">
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font1">{contentData.heading}</p>
                            <p className="p_agetxt">{contentData.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font2">{content2Data.heading}</p>
                            <p className="p_agetxt">{content2Data.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font3">{content3Data.heading}</p>
                            <p className="p_agetxt">{content3Data.massage}</p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="card" style={{ width: "24rem" }}>
                      <img src={require('../assest/class-img2.png')} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <div className="top_txt">
                          <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
                          <p className="card_ptxt">{slider1Data.massage}</p>

                        </div>
                        <hr />
                        <div className="row bot_txt">
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font1">{contentData.heading}</p>
                            <p className="p_agetxt">{contentData.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font2">{content2Data.heading}</p>
                            <p className="p_agetxt">{content2Data.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font3">{content3Data.heading}</p>
                            <p className="p_agetxt">{content3Data.massage}</p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="card" style={{ width: "24rem" }}>
                      <img src={require('../assest/class-img3.png')} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <div className="top_txt">
                          <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
                          <p className="card_ptxt">{slider1Data.massage}</p>

                        </div>
                        <hr />
                        <div className="row bot_txt">
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font1">{contentData.heading}</p>
                            <p className="p_agetxt">{contentData.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font2">{content2Data.heading}</p>
                            <p className="p_agetxt">{content2Data.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font3">{content3Data.heading}</p>
                            <p className="p_agetxt">{content3Data.massage}</p>
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
                          <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
                          <p className="card_ptxt">{slider1Data.massage}</p>

                        </div>
                        <hr />
                        <div className="row bot_txt">
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font1">{contentData.heading}</p>
                            <p className="p_agetxt">{contentData.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font2">{content2Data.heading}</p>
                            <p className="p_agetxt">{content2Data.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font3">{content3Data.heading}</p>
                            <p className="p_agetxt">{content3Data.massage}</p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="card" style={{ width: "24rem" }}>
                      <img src={require('../assest/class-img2.png')} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <div className="top_txt">
                          <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
                          <p className="card_ptxt">{slider1Data.massage}</p>

                        </div>
                        <hr />
                        <div className="row bot_txt">
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font1">{contentData.heading}</p>
                            <p className="p_agetxt">{contentData.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font2">{content2Data.heading}</p>
                            <p className="p_agetxt">{content2Data.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font3">{content3Data.heading}</p>
                            <p className="p_agetxt">{content3Data.massage}</p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="card" style={{ width: "24rem" }}>
                      <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <div className="top_txt">
                          <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
                          <p className="card_ptxt">{slider1Data.massage}</p>

                        </div>
                        <hr />
                        <div className="row bot_txt">
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font1">{contentData.heading}</p>
                            <p className="p_agetxt">{contentData.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font2">{content2Data.heading}</p>
                            <p className="p_agetxt">{content2Data.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4">
                            <p class="color-font3">{content3Data.heading}</p>
                            <p className="p_agetxt">{content3Data.massage}</p>
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
                          <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
                          <p className="card_ptxt">{slider1Data.massage}</p>

                        </div>
                        <hr />
                        <div className="row bot_txt">
                          <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                            <p class="color-font1">{contentData.heading}</p>
                            <p className="p_agetxt">{contentData.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                            <p class="color-font2">{content2Data.heading}</p>
                            <p className="p_agetxt">{content2Data.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                            <p class="color-font3">{content3Data.heading}</p>
                            <p className="p_agetxt">{content3Data.massage}</p>
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
                          <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
                          <p className="card_ptxt">{slider1Data.massage}</p>

                        </div>
                        <hr />
                        <div className="row bot_txt">
                          <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                            <p class="color-font1">{contentData.heading}</p>
                            <p className="p_agetxt">{contentData.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                            <p class="color-font2">{content2Data.heading}</p>
                            <p className="p_agetxt">{content2Data.massage}</p>
                          </div>
                          <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                            <p class="color-font3">{content3Data.heading}</p>
                            <p className="p_agetxt">{content3Data.massage}</p>
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
                <a href="/" class="border-btn">{section3Button.buttonText}</a>
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
                  <span class="span">{section4.subheading}</span>
                  <h2>{section4.heading}</h2>
                  <p>{section4.massage}</p>
                  <a href="/" class="btn mt-10">{section4.buttonText}</a>
                </div>
                <Countdown />


              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fifth_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
              <h2 className="slide_head" style={{ color: "#423F8D" }}>{section5.heading}
              </h2>
              <p className="text_our">{section5.massage}</p>
            </div>
          </div>



          <Slider />

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
                        <p className="lh-lg">{testimonial.massage}</p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i><br />
                      </div>

                      <div className='d-flex inter_div justify-content-center'>
                        <div className="bot_testislide">
                          <img className="img-fluid" src={require('../assest/testi-1.png')} alt="" />
                        </div>
                        <h4 className="head_testislide" style={{ color: "#ED078B" }}>{testimonial.heading} <br />
                          <span className="txt_testislide" style={{ color: "#57667e" }}>{testimonial.subheading}</span></h4>

                      </div>

                    </div>
                  </div>
                  <div className="carousel-item active">
                    <div className="row justify-content-center">
                      <div className="t-card">
                        <img className="img-fluid testislide_img" src={require('../assest/testimonial.png')} alt="" />
                        <p className="lh-lg">{testimonial.massage}</p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i><br />
                      </div>

                      <div className='d-flex inter_div justify-content-center'>
                        <div className="bot_testislide">
                          <img className="img-fluid" src={require('../assest/testi-1.png')} alt="" />
                        </div>
                        <h4 className="head_testislide" style={{ color: "#ED078B" }}>{testimonial.heading} <br />
                          <span className="txt_testislide" style={{ color: "#57667e" }}>{testimonial.subheading}</span></h4>

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