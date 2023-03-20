import React from 'react';
import image from '../../../assets/avatar1.jpg';


const SidebarChats = ({image, name, text, time, message_counts}) => {
   return(
    <article className="sidebar--chat">
      <div className='sidebar__profile'>
        <div className="sidebar__profile-image">
            <img src={image} alt="image" />
        </div>
        <div className="sidebar--texts">
            <span>{name}</span>
            <p>{text}</p>
        </div>
      </div>

      <div className="new__chat">
        <span className='chat__time'>{time}</span>
        <p className='chat__counts'>{message_counts}</p>
      </div>

    </article>
   );
}

const Chats = () => {

  return (
    <div className='sidebar__chats'>
      <SidebarChats image = {image} name="Esther" text="hello Esther" time="1:20pm" message_counts="2"/>
      <SidebarChats image={image} name="Esther" text="hello Esther" time="1:20pm" message_counts="2"/>
      <SidebarChats image={image} name="Esther" text="hello Esther" time="1:20pm" message_counts="2"/>
      <SidebarChats image={image} name="Esther" text="hello Esther" time="1:20pm" message_counts="2"/>
      <SidebarChats image={image} name="Esther" text="hello Esther" time="1:20pm" message_counts="2"/>
      <SidebarChats image={image} name="Esther" text="hello Esther" time="1:20pm" message_counts="2"/>
      
    </div>
  )
};

export default Chats
