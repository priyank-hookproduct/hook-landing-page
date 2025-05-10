import React from "react"

import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Homepage } from "./Homepage"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

function App() {
  return(
    <>
      <BrowserRouter>    
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App