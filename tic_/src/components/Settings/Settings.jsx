import React from 'react';
import './settings.css';
import image from '../../assets/avatar3.jpg';


const Settings = () => {
  return (
    <>
      <section className='settings'>
        <h3 className='fw-bold'>Settings</h3>
        <article className='profile--settings'>
         <img src={image} alt="profile photo" />
         <div className="profile--text">
         <span className='fw-bold'>name</span>
         <p className='text-muted'>Edit profile</p>
         </div>
        </article>
        <div className='chat--settings'>
          <p>Language</p><hr />
           <p>Privacy</p><hr />
           <p>Settings</p><hr />
           <p>Support</p>
        </div>
        <button>Log out</button>
      </section>
    </>
  )
}

export default Settings
