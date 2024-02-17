import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import React  from 'react'
import './App.css'
import Login from './Pages/Login'

function App() {
  const navigate=useNavigate()
  return (
    <>
    <button onClick={()=>navigate("./Login")} >Login</button>
   </>
  )
}
export default App