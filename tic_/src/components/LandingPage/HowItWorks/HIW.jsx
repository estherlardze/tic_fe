import React from 'react';
import './hiw.css';
import chatimage from '../../../assets/chat.jpg';


const HIW = () => {
  return (
    <div className='landing__hiw' id='hiw'>
       <div>
          <img src={chatimage} alt="" />
       </div>
       <div className='landing__hiw-text'>
         <h2 className='fw-bold'>How This App Works</h2>
         <ul>
           <li> <b>User Registration:</b> The user needs to create an account and log in .The application stores the user's login details in a secure database.</li>
           <li> <b>User Interface:</b> Once the user is logged in, they can access the chat interface. The interface allows users to see their contacts and to initiate a conversation.</li>
          <li><b> Messaging:</b> When a user sends a message, the chat application sends the message to the chat server. The chat server then delivers the message to the recipient's device.</li>
           <li><b>Real-time Communication:</b>Tic uses websockets to allow for real-time communication. This means that users can see and respond to messages as soon as they are sent.</li>
           <li><b>Data Storage:</b> The application also store messages in a database so that users can access their chat history. This data is usually encrypted to protect the privacy of users.</li>
            
          </ul>
       </div>
    </div>
  )
}

export default HIW
