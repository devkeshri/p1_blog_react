import React, { useState,useEffect } from 'react'
import "../styles/Slider.css"
import axios from "axios"
import {homedataurl} from "../API/Api.js"

// const url = "http://localhost:5000/home/getdata"

function Slider() {

  const [Slider1Data, setSlider1Data] = useState([]);
  const [Slider2Data, setSlider2Data] = useState([]);
  const [Slider3Data, setSlider3Data] = useState([]);
  const [Slider4Data, setSlider4Data] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(homedataurl);
        // Assuming the API response is an object with a 'data' property containing an array of objects
        if (response.data && response.data.data && response.data.data.length > 0) {
          const slider1DataObject = response.data.data[14];
          setSlider1Data(slider1DataObject)
          setSlider2Data(response.data.data[15])
          setSlider3Data(response.data.data[16])
          setSlider4Data(response.data.data[17])
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    
    {/* // Desktop slider 2 start */}
    <div className="desktopslide2">
    <div id="devq" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="cardd-wrapper container-sm d-flex  justify-content-around">
            <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider1Data.heading}</a></h3>
              <p className="txt_exp">{Slider1Data.subheading}</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team2.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider2Data.heading}</a></h3>
              <p className="txt_exp">{Slider2Data.subheading}</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team1.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider3Data.heading}</a></h3>
              <p className="txt_exp">{Slider3Data.subheading}</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider4Data.heading}</a></h3>
              <p className="txt_exp">{Slider4Data.subheading}</p>
              </div>
              </div>
        </div>

        <div className="carousel-item">
          <div className="cardd-wrapper container-sm d-flex  justify-content-around">
          <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team1.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider1Data.heading}</a></h3>
              <p className="txt_exp">{Slider1Data.subheading}</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team1.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider2Data.heading}</a></h3>
              <p className="txt_exp">{Slider2Data.subheading}</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team1.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider3Data.heading}</a></h3>
              <p className="txt_exp">{Slider3Data.subheading}</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team1.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider4Data.heading}</a></h3>
              <p className="txt_exp">{Slider4Data.subheading}</p>
              </div>

            
          </div>
        </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#devq" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#devq" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>

    {/* // Desktop slider 2 end */}



    {/* // Mobile slider 2 start */}
          <div className="mobileslide2">
          <div id="mobileslid" className="carousel carousel-dark slide" data-bs-ride="carousel">
           <div className="carousel-inner">
            <div className="carousel-item active">
        <div className="cardd-wrapper  d-flex  justify-content-around">
          <div className="cardd" style={{ width: "16rem" }}>
            <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
            <h3 className="head_exp"><a href="/" tabindex="-1">{Slider1Data.heading}</a></h3>
            <p className="txt_exp">{Slider1Data.subheading}</p>
            </div>

            
            </div>
      </div>

      <div className="carousel-item">
        <div className="cardd-wrapper  d-flex  justify-content-around">
          <div className="cardd" style={{ width: "16rem" }}>
            <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
            <h3 className="head_exp"><a href="/" tabindex="-1">{Slider2Data.heading}</a></h3>
            <p className="txt_exp">{Slider2Data.subheading}</p>
            </div>


          
        </div>
      </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#mobileslid" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mobileslid" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
          </div>
          </div>

    {/* // Mobile slider 2 end */}


    {/* tablet slider start */}
     
    <div className="tabslide2">
    <div id="tabslide" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="cardd-wrapper container-sm d-flex  justify-content-around">
            <div className="cardd" style={{ width: "18rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider1Data.heading}</a></h3>
              <p className="txt_exp">{Slider1Data.subheading}</p>
              </div>

              <div className="cardd" style={{ width: "18rem" }}>
              <img src={require('../assest/team2.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider2Data.heading}</a></h3>
              <p className="txt_exp">{Slider2Data.subheading}</p>
              </div>

              </div>
        </div>

        <div className="carousel-item">
          <div className="cardd-wrapper container-sm d-flex  justify-content-around">
            <div className="cardd" style={{ width: "18rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider3Data.heading}</a></h3>
              <p className="txt_exp">{Slider3Data.subheading}</p>
              </div>

              <div className="cardd" style={{ width: "18rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">{Slider4Data.heading}</a></h3>
              <p className="txt_exp">{Slider4Data.subheading}</p>
              </div>


            
          </div>
        </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#tabslide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#tabslide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>

    {/* tablet slider end */}

  </>
          
  )
}

export default Slider