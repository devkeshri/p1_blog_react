import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';
import Bloginner from '../../../Bloginner';


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
    
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={require('../../../../../src/assest/single_blog_1.png')} alt='cover' />
      <Chip label={category} />
      <Link to={`/blog/${id}`}><h3>{title}</h3></Link>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          {/* <img src={authorAvatar} alt='avatar' /> */}
          <div>
            {/* <h6>{authorName}</h6> */}
            <p className='blog_item_date'>{createdAt}</p>
          </div>
          <Bloginner/>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
    
    </>
  );
};

export default BlogItem;
