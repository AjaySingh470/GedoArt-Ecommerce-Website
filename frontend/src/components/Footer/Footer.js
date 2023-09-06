import React from 'react'
import './Footer.scss'
import {AiOutlineGithub,AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="content">
          <div className="left">
            <h3 className="title">Follow Us:</h3>
            <ul className='follow'>
              <li className='center-content' ><AiOutlineInstagram></AiOutlineInstagram></li>
              <li className='center-content' ><AiOutlineFacebook></AiOutlineFacebook> </li>
              <li className='center-content' ><AiOutlineTwitter></AiOutlineTwitter> </li >
              <li className='center-content' ><AiOutlineGithub></AiOutlineGithub> </li>
            </ul>
          </div>
          <div className="right">
            <h3 className="title">Contacts</h3>
            <ul className='company'>
              <li className='hover-link' >Contact Us</li>
              <li className='hover-link' >Privacy Policy</li>
              <li className='hover-link' >Return Policy</li>
              <li className='hover-link' >Shipping Policy</li>
              <li className='hover-link' >Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer