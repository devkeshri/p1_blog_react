import React, { useState, useEffect, useMemo } from 'react';
import EmptyList from '../../component/common/EmptyList';
import BlogList from '../../component/Home/BlogList';
import Header from '../../component/Home/Header/Index';
import SearchBar from '../../component/Home/SearchBar';
import axios from 'axios';
import BlogItem from '../../component/Home/BlogList/Blogitem';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const LIMIT = 4;

const totalPagesCalculator = (total, limit) => {
  const pages = [];
  const pnum = Math.ceil(parseInt(total) / limit);
  for (let x = 1; x <= pnum; x++) {
    pages.push(x);
  }
  return pages;
};

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  //  pagination code
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useMemo(() => {
    axios
      .get('http://localhost:5000/blog/getblog', {
        params: {
          page: activePage,
          size: LIMIT
        }
      })
      .then(({ data }) => {
        setUsers(data.blogs);
        let tot = parseInt(data.totalPages);
        setTotalUsers(tot);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, [activePage]);

  // Search submit
  const handleSearchBar = e => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const searchBlogdata = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setUsers(searchBlogdata);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey('');
    // Reset to original blogs data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blog/getblog');
        setBlogs(response.data.blogs);
        setUsers(response.data.blogs); // Set the users state to show all blogs
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blog/getblog');
        const firstDataObject = response.data.blogs;
        setBlogs(firstDataObject);
        setUsers(firstDataObject); // Set the users state to show all blogs
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={e => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!users.length ? <EmptyList /> : <BlogList blogs={users} />}
       {/* Render the users state instead of blogs */}

      {/* Pagination code */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {activePage !== 1 && (
            <li className="page-item" onClick={() => setActivePage(activePage - 1)}>
              <a className="page-link" href="javascript:void(null)">
                Previous
              </a>
            </li>
          )}
          {totalPagesCalculator(totalUsers, LIMIT).map(page => (
            <li className={`page-item ${activePage === page ? 'active' : ''}`} key={page}>
              <a className="page-link" href="javascript:void(null)" onClick={() => setActivePage(page)}>
                {page}
              </a>
            </li>
          ))}
          {activePage !== totalPagesCalculator(totalUsers, LIMIT).length && (
            <li className="page-item" onClick={() => setActivePage(activePage + 1)}>
              <a className="page-link" href="javascript:void(null)">
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
