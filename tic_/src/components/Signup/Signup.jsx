import React from 'react'
import './signup.css';
import { Login } from '../imports';


const Signup = () => {
  return (
    <>
       <form> 
        <h2>Sign Up</h2>
  <div className="form-row d-flex flex-wrap">
    <div className="form-group  me-1">
      <input type="text" className="form-control " placeholder="First Name" required/>
    </div>
    <div className="form-group ">
      <input type="text" className="form-control"  placeholder="Last Name" required/>
    </div>
  </div>
  
  <div className="form-group col-md-8">
    <input type="email" className="form-control"  placeholder="Email" required/>
  </div>
  <div className="form-group col-md-8">
    <input type="password" className="form-control"  placeholder="Password" required/>
  </div>
  <div className="form-group col-md-8">
    <input type="password" className="form-control"  placeholder="Confirm Password" required/>
  </div>

         <label>
         <input type="checkbox"/>
          <small>I accept the Terms of Use & Privacy Policy</small>
         </label><br/>
         <button type="submit">Sign up</button>
         <p>Already have an account? <span><a href="#">Login here</a></span></p>
       </form>
    </>
  )
}

export default Signup
