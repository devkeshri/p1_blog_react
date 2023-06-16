import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../component/common/Chip';
import EmptyList from '../../component/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../component/Sidebar'
import Tagcloud from '../../component/Tagcloud';
import Instagram from '../../component/Instagram';
import Newslatter from '../../component/Newslatter';
import Recentpost from '../../component/Recentpost'
import SearchBar from '../../component/Home/SearchBar/index';
// import BlogList from '../../component/Home/BlogList';

const Blog = () => {
  // search code
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  // search code end
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      {/* <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link> */}
      {blog ? (
        <section className="bloginner">
        <div className="container">
        <div className="row">
        <div className="col-lg-8">
        <div className='blog-wrap'>
          
          <img src={require('../../assest/single_blog_1.png')} alt='cover' />
          <header>
            {/* <p className='blog-date'>Published {blog.createdAt}</p> */}
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <p className='blog-desc'>{blog.description}</p>
          </div>
          </div>
          <div className="col-lg-4">



          {/* search code */}
          <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      
          {/* search code end */}


          {/* <SearchBar/> */}
          <Sidebar/>
          <Recentpost/>
   <Tagcloud/>
   <Instagram/>
   <Newslatter/>
          </div>
        </div>
        </div>
        </section>
      ) : (
        <EmptyList />
      )}
      
    </>
  );
};

export default Blog;
