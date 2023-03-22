import React , {useState} from 'react';
import './Navbar.css';
import {RiMenu3Fill , RiCloseFill} from 'react-icons/ri';


const Navbar = () => {
  
const [toggleMenuIcon, settoggleMenuIcon] = useState(false);

  return (
    <nav className='landing__navbar' id='home'>
      <div className='landing__navbar-links'>
        <div className='landing__navbar-logo'>
        <h2 className='fw-bold'>TIC</h2>
        </div>  
        <div className='landing__navbar-links__container'>
            <p><a href="#home">Home</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#hiw">How it Works</a></p>
        </div>
      </div>
     <div className='landing__navbar-signin'>
     <p><a href="#">sign up</a></p>
    <button type='button'>Sigh in</button>
     </div>
     <div className='landing__navbar-menuicon'>
        {toggleMenuIcon ? <RiCloseFill size={27} onClick = {() => settoggleMenuIcon(false)}/> : <RiMenu3Fill size={27} onClick = {() => settoggleMenuIcon(true)}/> }
       
        {toggleMenuIcon && 
          <div className='landing__navbar-toggleicon scale-up-center'>
            <div className='landing__navbar-links__small'>
            <p><a href="#home">Home</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#hiw">How it Works</a></p>
            </div>
            <div className='landing__navbar-signin__small'>
             <p><a href="#">sign up</a></p>
              <button type='button'>Sigh in</button>
            </div>
          </div>
           
         }
        
      
     </div>
    </nav>
  )
}

export default Navbar
