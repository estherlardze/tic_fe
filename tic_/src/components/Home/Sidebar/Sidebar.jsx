import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <div className='category'>
         <div className='add-chat'>
         <h5 className='fw-bold'>Chats</h5>
         <i class="fa-solid fa-plus"></i>
         </div>
        <div className="chat--category">
          <p>DIRECT</p>
          <p>GROUPS</p>
        </div>
      </div>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar
