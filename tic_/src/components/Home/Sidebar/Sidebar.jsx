import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';
import {AiOutlinePlus} from 'react-icons/ai';
import Data from './DummyChats';



const Sidebar = () => {

  return (
    <div className='sidebar'>
      <Navbar/>
      <div className='category'>
         <div className='add-chat'>
         <h4 className='fw-bold'>Chats</h4>
         <AiOutlinePlus className='add__chat-icon'/>
         </div>
        <div className="chat--category">
          <p>DIRECT</p>
          <p>GROUPS</p>
        </div>
      </div>
      <Search data={Data}/>
      {/* {
        Data.map(chat => (
          <Chats key={chat.name} chat = {chat} />
        ))
      } */}
    </div>
  )
}

export default Sidebar