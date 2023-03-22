import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Home, Error, Login, Privacy, Settings, Signup, Terms, LandingPage } from './components/imports';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import React from 'react'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element = {<LandingPage />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={ <Login />}/>
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
