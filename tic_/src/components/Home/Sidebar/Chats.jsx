import React from 'react';
import image from '../../../assets/avatar1.jpg';


const Chats = (props) => {
  console.log(props)
  const currentTime = new Date();
  const time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":";
  return (
     <div className='sidebar__chats'>
        <article className="sidebar--chat">
      <div className='sidebar__profile'>
        <div className="sidebar__profile-image">
            <img src={image} alt="profile image" />
        </div>
        <div className="sidebar--texts">
            <span>{props.chat.name}</span>
            <p>{props.chat.text}</p>
        </div>
      </div>

      <div className="new__chat">
        <span className='chat__time'>{time}</span>
        <p className='chat__counts'>{props.chat.message_counts}</p>
      </div>

    </article>
    </div>
  )
};

export default Chats