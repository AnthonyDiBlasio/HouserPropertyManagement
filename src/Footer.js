import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
 import {FaInstagram} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{backgroundColor: "white"}}>
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2"style={{borderColor:"#709176",backgroundColor: "#709176"}}>
       <a className="text-white" href="https://www.facebook.com/profile.php?id=100063450326579">  <FaFacebookF /></a>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{borderColor:"#709176",backgroundColor: "#709176"}}>
       <a className="text-white" href="https://www.facebook.com/profile.php?id=100063450326579"> <FaInstagram/> </a>     
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{borderColor:"#709176",backgroundColor: "#709176"}}>
       <a className="text-white" href="https://www.facebook.com/profile.php?id=100063450326579">  <FaTwitter/> </a>
      </button>
    </div>

    
    <div className="text-center text-white p-3" style={{backgroundColor: "#709176"}}>
      © 2023 Copyright: 
      <a className="text-white" href="https://houserpropertymanagement.com/">houserpropertymanagement.com</a>
    </div>
 
  </footer>
  
  );
};

export default Footer;