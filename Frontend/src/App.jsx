import { useState } from 'react'
import React  from 'react'
import './App.css'
import Login from './Pages/Login'
import img1 from './images/icon.png'

export default function App() {
  return (
    <>
    <div>
    <span class="item_outer_show" id="item_outer_show">
    <span class="item_text">Home</span><i class="mkdf-menu-arrow fa fa-angle-down"></i></span>
    </div>
      <div>
        <marquee className="custom-marquee">
          <h1>
            Developed By Shah Abdul Mazid, 
                          Jannatul Ferdouse,
                          Sabrina Akter
                                &
                          Budrun Nahar Bristy
          </h1>
        </marquee>
      </div>
    </>
  )
}
