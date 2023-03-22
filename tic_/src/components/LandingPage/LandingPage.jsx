import React from 'react';
import Feature from './Feature/Feature';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HIW from './HowItWorks/HIW';
import './landingPage.css';


const LandingPage = () => {
  return (
    <div>
        
        <Navbar/>
       <Header/>
       <Feature/>
       <HIW/>
       <Footer/>
    </div>
  )
}

export default LandingPage
