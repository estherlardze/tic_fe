import './App.css';
import {Home, Error, Login, Logout, Privacy, Settings, Signup, Terms } from './components/imports';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import React from 'react'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={ <Login />}/>
      <Route path="/logout" element={ <Logout />}/>
      <Route path="/privacy" element={ <Privacy />}/>
      <Route path="/settings" element={ <Settings />}/>
      <Route path="/signup" element={ <Signup />}/>
      <Route path="/terms" element={  <Terms />}/>
      <Route path="*" element={ <Error />}/>
      </Routes>
    </Router>
  )
}

export default App
