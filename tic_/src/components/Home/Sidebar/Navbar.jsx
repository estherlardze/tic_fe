import React from 'react';
import image from '../../../assets/avatar3.jpg';
import {FaPhoneAlt} from 'react-icons/fa';
import {TbMessageCircle2Filled} from 'react-icons/tb';
import {BsPeopleFill} from 'react-icons/bs'


function Navbar() {
  return (
    <div className="navbar top-sticky">
      <TbMessageCircle2Filled className='navbar__icon-message'/>
      <FaPhoneAlt className='navbar__icon-phone'/>
      <BsPeopleFill className='navbar__icon-people'/>
      <img src={image} alt="user" className='user__image'/> 
    </div>
  )
}

export default Navbar
