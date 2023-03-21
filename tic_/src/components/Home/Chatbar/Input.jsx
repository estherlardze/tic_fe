import React from 'react';
import {BsEmojiSmile} from 'react-icons/bs';
import {FiPaperclip} from 'react-icons/fi';
import {HiMicrophone} from 'react-icons/hi';
function Input() {
  return (
    <div>
      <div className="input-value">
        < BsEmojiSmile className='input__icon-emoji'/>
        <input type="text" placeholder='&#x20;Enter a message'/>
         <FiPaperclip className='input__icon-paperclip' />
        <i class="fa-sharp fa-regular fa-paper-plane-top"></i> 
        <HiMicrophone className='input__icon-microphone' />
      </div>
    </div>
  )
}

export default Input
