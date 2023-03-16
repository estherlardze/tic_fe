import React from 'react';
import image from '../../../assets/avatar.png';

function Chats() {
  return (
    <div className='sidebar__chats'>
      <div className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
           <span>Esther</span>
           <p>Hello</p>
        </div>
      </div>
      
      <div className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </div>
      <div className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </div>
      <div className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </div>
      <div className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
