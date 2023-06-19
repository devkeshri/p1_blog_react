import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';
import Bloginner from '../../../Bloginner';
import { FaUser } from 'react-icons/fa';


const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },

}) => {
 

  return (
    <>
    {/* {day}
    {dateNumber} */}
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={require('../../../../../src/assest/single_blog_1.png')} alt='cover' />
      
      <div className="content_box">
      <p className='blog_item_date'>{createdAt}</p>
      <Link to={`/blog/${id}`}><h3>{title} dev</h3></Link>
      <p className='blogItem-desc'>{description}</p>
      <div className="d-flex cat_icon">
      <FaUser/>
      <Chip label={category} />
      </div>
      </div>
      <footer>
        <div className='blogItem-author'>
          {/* <img src={authorAvatar} alt='avatar' /> */}
          <div>
            {/* <h6>{authorName}</h6> */}
         {/* <p className='blog_item_date'>{createdAt}</p> */}
          </div>
          <Bloginner/>
        </div>
        {/* <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link> */}
      </footer>
    </div>
    
    </>
  );
};

export default BlogItem;
