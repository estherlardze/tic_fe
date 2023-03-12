import React from 'react';
import './App.css';
import { Error, Login, Logout, Privacy, Settings, Signup, Terms } from './components/imports';


import React from 'react'

const App = () => {
  return (
    <div>
      <Error />
      <Login />
      <Logout />
      <Privacy />
      <Settings />
      <Signup />
      <Terms />
    </div>
  )
}

export default App
