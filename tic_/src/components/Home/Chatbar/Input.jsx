import React, {useState} from 'react';
import {BsEmojiSmile} from 'react-icons/bs';
import {FiPaperclip} from 'react-icons/fi';
import {HiMicrophone} from 'react-icons/hi';
import {AiOutlineSend} from 'react-icons/ai';
import './input.css';

function Input() {
  
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  function handleMessageInputChange(event) {
    setCurrentMessage(event.target.value);
  }

  function sendMessage() {
    const newMessage = {
      content: currentMessage,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    setCurrentMessage('');
  }

  // return (
  //     <div className="input-value">
  //       <BsEmojiSmile className='input__icon-emoji'/>
  //       <FiPaperclip className='input__icon-paperclip' />
  //       <HiMicrophone className='input__icon-microphone' />

        // <div className="chat-history">
        // {messages.map((message, index) => (
        //   <div key={index} className="send__input-message">
        //     <div className="content">{message.content}</div>
        //     <div className="timestamp">{message.timestamp.toLocaleString()}</div>
        //   </div>
        // ))}
  //     </div>
  //     <div className="message-input">
  //       <input type="text" value={currentMessage} onChange={handleMessageInputChange} placeholder='&#x20;Type a message'/>
  //       <AiOutlineSend onClick={sendMessage} className="send__message"/>
  //     </div>  
  //     </div>

  // )

  return(
    <div className="tic__input">
      <div className="tic__input-icon_emojiPaperClip">
        <BsEmojiSmile className="tic__emoji" />
        <FiPaperclip className='input__icon-paperclip' />
      </div>

      <div className="tic__message-input">
        <input type="text" value={currentMessage} onChange={handleMessageInputChange} placeholder='&#x20;Type a message'/>
        <AiOutlineSend onClick={sendMessage} className="send__message"/>
      </div>

      <div className="tic__message-icons">

        <HiMicrophone className='input__icon-microphone' />
      </div>    
    </div>

  );
}

export default Input
