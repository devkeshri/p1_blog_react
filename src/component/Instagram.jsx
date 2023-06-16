import React from 'react'
import '../styles/Instagram.css'

function Instagram() {
  return (
    <div className="blog_right_sidebar">
    <aside className="single_sidebar_widget instagram_feeds">
    <h4 className="widget_title">Instagram Feeds</h4>
    <ul className="instagram_row flex-wrap">
    <li>
    <a href="#">
    <img className="img-fluid" src={require("../assest/post_5.png")} alt=""/>
    </a>
    </li>
    <li>
    <a href="#">
    <img className="img-fluid" src={require("../assest/post_5.png")} alt=""/>
    </a>
    </li>
    <li>
    <a href="#">
    <img className="img-fluid" src={require("../assest/post_5.png")} alt=""/>
    </a>
    </li>
    <li>
    <a href="#">
    <img className="img-fluid" src={require("../assest/post_5.png")} alt=""/>
    </a>
    </li>
    <li>
    <a href="#">
    <img className="img-fluid" src={require("../assest/post_5.png")} alt=""/>
    </a>
    </li>
    <li>
    <a href="#">
    <img className="img-fluid" src={require("../assest/post_5.png")} alt=""/>
    </a>
    </li>
    </ul>
    </aside>
    </div>
  )
}

export default Instagram