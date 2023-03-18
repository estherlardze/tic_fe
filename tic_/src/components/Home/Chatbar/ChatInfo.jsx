import React from 'react';
import image from '../../../assets/avatar2.jpg'

function ChatInfo() {
  return (
    <div className='chat__info'>
      <div className="user--profile">
      <img src={image} alt="profile pic" />
       <div className="user--name">
        <span className='fw-bold'>katerine</span>
        <p className='text-muted'>Last seen 1hour ago</p>
       </div>
      </div>
      <div className="user--acount">
      <i class="fa-solid fa-phone"></i>
      <i class="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  )
}

export default ChatInfo
