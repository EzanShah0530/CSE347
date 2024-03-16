import React ,{useEffect} from 'react';
import { useState } from 'react';
import './Route/router.jsx';
import './App.css'

export default function App() { 
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(()=>{
  document.title='ESMB Healthcare Trust';},[]);
  return (
    <>
    <div className="app-container">
      <div className="content">
        <h1 className='title'>Welcome To ESMB Healthare Trust</h1>
      </div>
      <div className="dropdown">
        <div className="buttons-container">
          <button className="home" onClick={() => setShowDropdown(false)}>Home</button>
          <button className="aboutus" onClick={() => setShowDropdown(!showDropdown)}>About us</button>
        </div>
        {showDropdown && (
          <div className="dropdown-content">
            <a href="/areg">Link1</a>
            <a href="/alogin">Link2</a>
            <a href="#">Link3</a>
          </div>
        )}
      </div>

      <footer className="footer">
        <marquee className="custom-marquee">
          <h1> Developed By Shah Abdul Mazid,Jannatul Ferdouse,Sabrina Akter & Budrun Nahar Bristy</h1>
        </marquee>
      </footer>
    </div>  
    </>  
  )
}
