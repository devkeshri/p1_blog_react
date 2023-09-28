import React, { useState,useEffect } from 'react'
import "../styles/Class.css"
import axios from "axios"
import {classdataurl} from "../API/Api.js"

function Class() {
  
  const [section1, setsection1] = useState([]);
  const [section2Data, setsection2Data] = useState([]);
  const [slider1Data, setslider1Data] = useState([]);
  const [content1Data, setcontent1Data] = useState([]);
  const [content2Data, setcontent2Data] = useState([]);
  const [content3Data, setcontent3Data] = useState([]);
  // const [section3Button, setsection3Button] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(classdataurl);
        // Assuming the API response is an object with a 'data' property containing an array of objects
        if (response.data && response.data.data && response.data.data.length > 0) {
          setsection1(response.data.data[0])
          setsection2Data(response.data.data[1])
          setslider1Data(response.data.data[2])
          setcontent1Data(response.data.data[3])
          setcontent2Data(response.data.data[4])
          setcontent3Data(response.data.data[5])
          // setsection3Button(response.data.data[11])
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
                <h1 className="">{section1.heading}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
       
      <section className="class_third_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
              <h2 className="slide_head" style={{ color: "#423F8D" }}>{section2Data.heading}
              </h2>
              <p className="text_our">{section2Data.massage}</p>
            </div>
          </div>

          {/* desktop slider start */}
          
<div id="clas_id" className="">
  <div className="ddd">
   <div class="row class_pad"> 
   <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
     <div class="card">
     <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
     <div className="card-body">
       <div className="top_txt">
         <h3><a href="/" tabindex="-1">{slider1Data.heading}</a></h3>
         <p className="card_ptxt">{slider1Data.massage}</p>

       </div>
       <hr />
       <div className="row bot_txt">
<div class="col-lg-4 col-sm-4 col-md-4 col-4">
  <p class="color-font1">{content1Data.heading}</p>
  <p className="p_agetxt">{content1Data.massage}</p>
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

 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
   <div class="card">
   <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
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

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
 <div class="card">
 <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
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

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
 <div class="card">
 <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
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

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
 <div class="card">
 <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
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

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
 <div class="card">
 <img src={require('../assest/class-img1.png')} className="card-img-top" alt="..." />
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

 
</div> 


         </div>
          
{/* desktop slider end */}


          

        </div>
      </section> 
     
      </>
  )
}

export default Class