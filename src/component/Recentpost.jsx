import React from 'react'
import '../styles/Recentpost.css'

function Recentpost() {
  
  return (
    <>
    <div className="blog_right_sidebar">
    <aside className="single_sidebar_widget popular_post_widget">
    <h3 className="widget_title" style={{color: "#2d2d2d"}}>Recent Post</h3>
    <div className="media post_item">
    <img src={require("../assest/post_1.png")} alt="post"/>
    <div className="media-body">
    <a href="blog_details.html">
    <h3 >From life was you fish...</h3>
    </a>
    <p>January 12, 2019</p>
    </div>
    </div>
    <div className="media post_item">
    <img src={require("../assest/post_2.png")} alt="post"/>
    <div className="media-body">
    <a href="blog_details.html">
    <h3 >The Amazing Hubble</h3>
    </a>
    <p>02 Hours ago</p>
    </div>
    </div>
    <div className="media post_item">
    <img src={require("../assest/post_1.png")} alt="post"/>
    <div className="media-body">
    <a href="blog_details.html">
    <h3 >Astronomy Or Astrology</h3>
    </a>
    <p>03 Hours ago</p>
    </div>
    </div>
    <div className="media post_item">
    <img src={require("../assest/post_1.png")} alt="post"/>
    <div className="media-body">
    <a href="blog_details.html">
    <h3 >Asteroids telescope</h3>
    </a>
    <p>01 Hours ago</p>
    </div>
    </div>
    </aside>
    </div>
    </>
  )
}

export default Recentpost