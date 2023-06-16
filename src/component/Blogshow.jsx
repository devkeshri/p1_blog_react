import React from 'react';
import Sidebar from '../component/Sidebar';
import Home from '../Pages/Home';
import '../styles/Blogshow.css'
import Recentpost from './Recentpost';
import Tagcloud from './Tagcloud';
import Instagram from './Instagram';
import Newslatter from './Newslatter';


const Blogshow = () => {
  
  
  return (
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
      <section className='blogitem_show'>
    <div className="container">
        <div className="row">
        <div className="col-lg-8">
     <Home/>
    </div>
      
    <div className="col-lg-4">
     
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
    </>
  )
}

export default Blogshow