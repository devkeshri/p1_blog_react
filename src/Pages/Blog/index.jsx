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
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineDribbble } from 'react-icons/ai';
import { BsBehance } from 'react-icons/bs';


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
        <>
          <section className="first_sec">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="class_head">
                    <h1 className="">Blog</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

                  {/* social icon */}
                  <div class="d-sm-flex justify-content-between text-center blogicon_sec">
                    <p class="like-info"><span class="align-middle"><i class="fa fa-heart"></i></span> Lily and 4
                      people like this</p>
                    <div class="col-sm-4 text-center my-2 my-sm-0">

                    </div>
                    <ul class="social-icons d-flex">
                      <li class="soc_icon"><a href="#"><GrFacebookOption/></a></li>
                      <li class="soc_icon"><a href="#"><AiOutlineTwitter/></a></li>
                      <li class="soc_icon"><a href="#"><AiOutlineDribbble/></a></li>
                      <li class="soc_icon"><a href="#"><BsBehance/></a></li>
                    </ul>
                  </div>

                  {/* social icon code end */}

                  {/* comment  code start */}
                  <div className="comments-area">
                    <h4>05 Comments</h4>
                    <div className="comment-list">
                      <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                          <div className="thumb">
                            <img src="assets/img/blog/comment_1.png" alt="" />
                          </div>
                          <div className="desc">
                            <p className="comment">
                              Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                              Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                            </p>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <h5>
                                  <a href="#">Emilly Blunt</a>
                                </h5>
                                <p className="date">December 4, 2017 at 3:12 pm </p>
                              </div>
                              <div className="reply-btn">
                                <a href="#" className="btn-reply text-uppercase">reply</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-list">
                      <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                          <div className="thumb">
                            <img src="assets/img/blog/comment_2.png" alt="" />
                          </div>
                          <div className="desc">
                            <p className="comment">
                              Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                              Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                            </p>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <h5>
                                  <a href="#">Emilly Blunt</a>
                                </h5>
                                <p className="date">December 4, 2017 at 3:12 pm </p>
                              </div>
                              <div className="reply-btn">
                                <a href="#" className="btn-reply text-uppercase">reply</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-list">
                      <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                          <div className="thumb">
                            <img src="assets/img/blog/comment_3.png" alt="" />
                          </div>
                          <div className="desc">
                            <p className="comment">
                              Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                              Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                            </p>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <h5>
                                  <a href="#">Emilly Blunt</a>
                                </h5>
                                <p className="date">December 4, 2017 at 3:12 pm </p>
                              </div>
                              <div className="reply-btn">
                                <a href="#" className="btn-reply text-uppercase">reply</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* comment code end */}

                  {/* comment form code start */}
                  <div className="comment-form">
                    <h4>Leave a Reply</h4>
                    <form className="form-contact comment_form" action="#" id="commentForm">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="button button-contactForm btn_1 boxed-btn">Post Comment</button>
                      </div>
                    </form>
                  </div>
                  {/* comment form code end */}

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
                  <Sidebar />
                  <Recentpost />
                  <Tagcloud />
                  <Instagram />
                  <Newslatter />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <EmptyList />
      )}

    </>
  );
};

export default Blog;
