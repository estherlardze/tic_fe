import React from 'react';
import './header.css';
import AOS from 'aos';

const Header = () => {
  return (
    <div className='landing__header'>
      <div className='landing__header-one' data-aos="fade-right">
          <h2>New Era of messaging Secure System Messaging</h2>
          <p>Tic is a real time chat application that enables users to exchange messages in real-time. The basic workings of a chat application involve a client-server architecture, where the client is the application installed on the user's device, and the server is a centralized system that stores the messages and relays them to other clients.</p>
          <div className='circle one'></div>
          <div className='circle two'></div>
          <div className='circle '></div>
      </div>
      <div className="landing__header-two">
        <div className='landing__header-circle'></div>
    
      </div>
    </div>
  )
}

export default Header
