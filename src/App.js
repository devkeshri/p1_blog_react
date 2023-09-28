
import React,{useEffect,useState} from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom";
import Homeee from './component/Homeee';
import Headerr from './component/Headerr';
import Footer from './component/Footer';
import Class from './component/Class';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Registration from './component/Registration';
import Blog from './Pages/Blog/index';
import Home from './Pages/Home/index';
import Blogshow from './component/Blogshow';


// import Bloginner from './component/Bloginner';


function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isRegistrationPage, setIsRegistrationPage] = useState(false);


  useEffect(() => {
    const checkLoginPage = () => {
      setIsLoginPage(window.location.pathname === '/login');
      // setIsRegistrationPage(window.location.pathname === '/registration');
    };
    // useEffect(() => {
      const checkRegistrationPage = () => {
        setIsRegistrationPage(window.location.pathname === '/registration');
      };
     // Initial check
     checkLoginPage();
     checkRegistrationPage();

     // Check every 3 seconds
     const intervalId = setInterval(checkLoginPage, 0);
     const regIntervalId = setInterval(checkRegistrationPage, 0);
 
     // Cleanup the interval on unmount
     return () =>{
      clearInterval(intervalId);
      clearInterval(regIntervalId);
     } 
   }, []);


  return (
    
    <>
   {/* <Router> */}
 
   {/* <Header/> */}
   {isLoginPage || isRegistrationPage ? null : <Headerr />}
   {/* {isRegistrationPage ? null : <Header />} */}
     <Routes>
 
     <Route path="/" element={<Homeee />} />
        <Route path="/class" element={<Class />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/blogshow' element={<Blogshow/>} />
        {/* <Route path='/bloginner' element={<Bloginner/>} /> */}
       
       
        
     </Routes>
     {/* <Footer/> */}

     {isLoginPage || isRegistrationPage ? null : <Footer />}
     {/* {isRegistrationPage ? null : <Footer />} */}
   {/* </Router> */}

   
  </>
 
 
  )
}
export default App



