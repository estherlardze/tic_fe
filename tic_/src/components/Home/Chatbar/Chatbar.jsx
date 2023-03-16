import React from 'react';
import ChatInfo from './ChatInfo';
import Messages from './Messages';
import Input from './Input';

function Chatbar() {
  return (
    <div className='chatbar'>
   <ChatInfo/>
   <Messages/>
   <Messages/>
   <Messages/>
   <Messages/>
   <Messages/>
   <Input/>
    </div>
  )
}

export default Chatbar
