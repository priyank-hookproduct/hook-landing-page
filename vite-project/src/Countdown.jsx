import { Typography } from '@mui/material'
import React from 'react'

const Countdown = () => {
  return (
    <div class="container">
      <div className="lines">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`line angle${i * 30}`} />
        ))}
      </div>
      <div class="arrow">
        <div class="left-line"></div>
        <div class="right-line second-hand"></div>
      </div>
      <div className="center-text">
        <Typography variant="h1">Coming</Typography>
        <Typography variant="h1">Soon!</Typography>
      </div>
    </div>
  )
}

export default Countdown