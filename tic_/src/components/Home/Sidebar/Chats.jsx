import React from 'react';
import image from '../../../assets/avatar1.jpg';

function Chats() {
  return (
    <div className='sidebar__chats'>
      <article className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
           <span>Esther</span>
           <p>Hello</p>
        </div>
        <div className="new__chat">
         <span className='chat__time'>1:02 pm</span>
         <p className='chat__counts'>2</p>
        </div>
      </article>
      
      <article className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </article>

      <article className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </article>

      <article className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </article>

      <article className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </article>

      <article className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </article>

      <article className="sidebar--chat">
        <div className="sidebar--profile">
           <img src={image} alt="" />
        </div>
        <div className="sidebar--texts">
        <span>Esther</span>
           <p>Hello</p>
        </div>
      </article>
      
    </div>
  )
}

export default Chats
