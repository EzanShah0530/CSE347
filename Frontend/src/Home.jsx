import { useState } from 'react'
import React  from 'react'
import './App.css'
import Login from './Pages/Login'
import img1 from './images/icon.png'

function Home() {
  return (
    <>
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
export default Home