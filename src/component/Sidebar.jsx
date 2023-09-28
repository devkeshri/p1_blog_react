import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Sidebar.css"

function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blog/getblog'); // Replace with your API endpoint
        setCategories(response.data.blogs);
        console.log("cat", response.data.blogs )
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="cate_padding">
      <div className="blog_right_sidebar">
        <aside className="single_sidebar_widget post_category_widget">
          <h4 className="widget_title" style={{ color: "#2d2d2d;" }}>Category</h4>
          <ul className="list cat-list">
          {categories.map(cat => (
              
                <a href="#" className="d-flex">
                  <p>{cat.category}</p>
                  
                </a>
              
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
