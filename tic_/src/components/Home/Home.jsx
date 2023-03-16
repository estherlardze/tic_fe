import React from 'react';
import Chatbar from './Chatbar/Chatbar';
import Sidebar from './Sidebar/Sidebar';

import './Home.css'

function Home() {
  return (
    <>
      <div className="home--container">
        <Sidebar/>
        <Chatbar/>
      </div>
    </>
  )
}

export default Home
