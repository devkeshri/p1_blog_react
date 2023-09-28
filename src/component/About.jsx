import React, { useState,useEffect } from 'react'
import "../styles/About.css"
import Slider from '../component/Slider';
import Countdown from '../component/Countdown';
import '../styles/Countdown.css'
import axios from "axios"
import {aboutdataurl} from "../API/Api.js"

function Class() {

  const [Section2Data, setSection2Data] = useState([]);
  // const [box1Data, setbox1Data] = useState([]);
  // const [box2Data, setbox2Data] = useState([]);
  // const [box3Data, setbox3Data] = useState([]);
  // const [section2imgData, setsection2imgData] = useState([]);
  // const [section3Data, setsection3Data] = useState([]);
  // const [slider1Data, setslider1Data] = useState([]);
  // const [contentData, setcontentData] = useState([]);
  // const [content2Data, setcontent2Data] = useState([]);
  // const [content3Data, setcontent3Data] = useState([]);
  // const [section3Button, setsection3Button] = useState([]);
  // const [section4, setsection4] = useState([]);
  // const [section5, setsection5] = useState([]);
  // const [testimonial, settestimonial] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(aboutdataurl);
        // Assuming the API response is an object with a 'data' property containing an array of objects
        if (response.data && response.data.data && response.data.data.length > 0) {
          setSection2Data(response.data.data[2])
          // setbox1Data(response.data.data[2])
          // setbox2Data(response.data.data[3])
          // setbox3Data(response.data.data[4])
          // setsection2imgData(response.data.data[5])
          // setsection3Data(response.data.data[6])
          // setslider1Data(response.data.data[7])
          // setcontentData(response.data.data[8])
          // setcontent2Data(response.data.data[9])
          // setcontent3Data(response.data.data[10])
          // setsection3Button(response.data.data[11])
          // setsection4(response.data.data[12])
          // setsection5(response.data.data[13])
          // settestimonial(response.data.data[18])
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
            <div className="col-xl-8 col-lg-11 col-md-12">
              <div className="class_head">
                <h1 className="">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      </>
  )
}

export default Class