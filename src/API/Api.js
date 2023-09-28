import axios from "axios";

// we need to pass the baseURL as an object
const API = ({
  baseURL: "http://localhost:5000",
});
export const  homedataurl=API.baseURL+`/home/getdata`;
export const  classdataurl=API.baseURL+`/class/getdata`;
export const  aboutdataurl=API.baseURL+`/about/getdata`;
