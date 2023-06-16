import React from 'react'
import "../styles/Slider.css"
function Slider() {
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
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team2.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team1.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>
              </div>
        </div>

        <div className="carousel-item">
          <div className="cardd-wrapper container-sm d-flex  justify-content-around">
            <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team1.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team2.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              <div className="cardd" style={{ width: "16rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
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
            <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
            <p className="txt_exp">Sports Instructor</p>
            </div>

            
            </div>
      </div>

      <div className="carousel-item">
        <div className="cardd-wrapper  d-flex  justify-content-around">
          <div className="cardd" style={{ width: "16rem" }}>
            <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
            <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
            <p className="txt_exp">Sports Instructor</p>
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
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              <div className="cardd" style={{ width: "18rem" }}>
              <img src={require('../assest/team2.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              </div>
        </div>

        <div className="carousel-item">
          <div className="cardd-wrapper container-sm d-flex  justify-content-around">
            <div className="cardd" style={{ width: "18rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
              </div>

              <div className="cardd" style={{ width: "18rem" }}>
              <img src={require('../assest/team3.png')} className="cardd-img-top" alt="..." />
              <h3 className="head_exp"><a href="/" tabindex="-1">Mr. Jacson Clay</a></h3>
              <p className="txt_exp">Sports Instructor</p>
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