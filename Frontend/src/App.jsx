import React ,{useEffect} from 'react';
import './App.css'

export default function App() { 
  useEffect(()=>{
  document.title='ESMB Healthcare Trust';},[]);
  return (
    <>
    <div className="app-container">
      <div className="content">
        <h1 className='title'>Welcome To ESMB Healthare Trust</h1>
      </div>
      <footer className="footer">
        <marquee className="custom-marquee">
          <h1> Developed By Shah Abdul Mazid,Jannatul Ferdouse,Sabrina Akter & Budrun Nahar Bristy</h1>
        </marquee>
        <h1></h1>
      </footer>
    </div>  
    </>  
  )
}
