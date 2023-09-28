// import React from "react";
// import { useState,useEffect,useContext  } from "react";
// import axios from "axios";

// export const BlogProvider  = ({children})=>{
//   const url = "http://localhost:5000/blog/getdata";
//   const [data, setData] = useState([]);
//   const BlogContext = React.createContext();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         if (
//           response.data &&
//           response.data.data &&
//           response.data.data.length > 0
//         ) {
//           const firstDataObject = response.data.data;
//           setData(firstDataObject);
//           console.log("dds",firstDataObject)
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
  
//   }, []);

//   return (
//     <BlogContext.Provider value={data}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

