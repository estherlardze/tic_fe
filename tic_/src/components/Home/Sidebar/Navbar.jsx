import React from 'react';
import image from '../../../assets/avatar.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo fw-bold">
        Tic
      </div>
        <div className="user">
          <img src={image} alt="user" className='user__image'/> <span>name</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
