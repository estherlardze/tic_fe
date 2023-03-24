import React , {useState} from 'react';
import './Navbar.css';
import {RiMenu3Fill , RiCloseFill} from 'react-icons/ri';
import {Link} from 'react-router-dom';


const Navbar = () => {
  
const [toggleMenuIcon, settoggleMenuIcon] = useState(false);

  return (
    <nav className='landing__navbar' id='home'>
      <div className='landing__navbar-links'>
        <div className='landing__navbar-logo'>
        <h2 className='fw-bold'>tic</h2>
        </div>  
        <div className='landing__navbar-links__container'>
            <p><a href="#home">Home</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#hiw">How it Works</a></p>
        </div>
      </div>
     <div className='landing__navbar-signin'>

     <Link to="/signup" className='sign-up'>Sign up</Link>
      <Link to="/login" className='button'><button>Sign in</button></Link>
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
            <Link to="/signup" className='mb-5 text-light text-decoration-none'>{"sign up"}</Link> <br />
            <Link to="/login" className='landing__navbar-signin__small-button mt-3'>{"Sign in"}</Link>
            </div>
          </div>
           
         }
        
      
     </div>
    </nav>
  )
}

export default Navbar
