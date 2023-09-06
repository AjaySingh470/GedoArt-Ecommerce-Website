import React from 'react'
import './Hero.scss'
import {useNavigate} from 'react-router'
function Hero() {
  const navigate = useNavigate();
  return (
    <div className='Hero'>
      <div className='hero-content center-content' >
        <h2 className='heading'>Exclusive Print and ArtWork...</h2>
        <p className='sub-heading'>Exclusive Art Pieces, for the Exclusive You..</p>
        <button onClick={()=>navigate('/category')} className='primary-btn'>Explore More</button>
      </div>
        
    </div>
  )
}

export default Hero;