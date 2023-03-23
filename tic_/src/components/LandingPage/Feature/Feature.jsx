import './feature.css';
import React from 'react';
import {AiFillWechat} from 'react-icons/ai';
import {GrSecure} from 'react-icons/gr';
import {MdPrivacyTip} from 'react-icons/md';

const Feature = () => {
  return (
    <div className='landing__features' id='features'>
      <h1 className='fw-bold'>FEATURES</h1>
      <div className='landing__feature-list'>
         <article>
          < AiFillWechat className='landing__feature-Icon'/>
          <h4 className='fw-bold'>Chat with friends</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quae. Nesciunt dolorem officia sapiente quasi sunt quia ea inventore magnam.</p>
         </article>
         <article>
          < GrSecure className='landing__feature-Icon'/>
          <h4 className='fw-bold'>End-to-end encryption</h4>
          <p>This means that all information is encrypted using a key that is known only by you and the recipient. Nobody else can to access the content of such messages without having direct access to your device.</p>
         </article>
         <article>
          < MdPrivacyTip className='landing__feature-Icon'/>
          <h4 className='fw-bold'>privacy</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quae. Nesciunt dolorem officia sapiente quasi sunt quia ea inventore magnam.</p>
         </article>
      </div>
    </div>
  )
}

export default Feature
