import React from 'react';
import image from '../../../assets/avatar3.jpg';

function Navbar() {
  return (
    <div className="navbar">
      <i class="fa-solid fa-message"></i>
      <i class="fa-solid fa-phone"></i>
      <i class="fa-solid fa-users"></i>
          <img src={image} alt="user" className='user__image'/> 
    </div>
  )
}

export default Navbar
