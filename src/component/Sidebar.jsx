import React from 'react';
import "../styles/Sidebar.css"

function sidebar() {
  return (
    <div className="cate_padding">
    <div className="blog_right_sidebar">
    <aside className="single_sidebar_widget post_category_widget">
<h4 className="widget_title" style={{color: "#2d2d2d;"}}>Category</h4>
<ul className="list cat-list">
<li>
<a href="#" className="d-flex">
<p>Resaurant food</p>
<p>(37)</p>
</a>
</li>
<li>
<a href="#" className="d-flex">
<p>Travel news</p>
<p>(10)</p>
</a>
</li>
<li>
<a href="#" className="d-flex">
<p>Modern technology</p>
<p>(03)</p>
</a>
</li>
<li>
<a href="#" className="d-flex">
<p>Product</p>
<p>(11)</p>
</a>
</li>
<li>
<a href="#" className="d-flex">
<p>Inspiration</p>
<p>21</p>
</a>
</li>
<li>
<a href="#" className="d-flex">
<p>Health Care (21)</p>
<p>09</p>
</a>
</li>
</ul>
</aside>
</div>
</div>
  )
}

export default sidebar