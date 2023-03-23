import React, { useEffect, useState } from 'react';
import validateForm from './SignUpValidation';
import './signup.css';
import {Link} from 'react-router-dom';



const Signup = () => {
  const initialValues = {firstname: "", lastname: "", email: "", password: "", confirmpassword: ""};
  const [formData, setFormData] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false)
  const [formErrors, setFormErrors] = useState({})

const handleChange = (e) =>{
   const {name, value} = e.target;
   setFormData({...formData, [name]: value});
 }

 const handleSubmit = (e) =>{
   e.preventDefault();
   setFormErrors(validateForm(formData));
   setIsSubmit(true);
 }
  
 useEffect(() =>{
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formData)
  }
 }, [formErrors]);

 
  return (
    <>
    {(Object.keys(formErrors).length === 0 && isSubmit) && (<p style={{textAlign: "center"}}>sign in was successful</p>)}
  <form onSubmit={handleSubmit} className="mt-5"> 
    <h2>Sign Up</h2>

     <div className="form-group col-md-8">
       <input type="text" className="form-control " placeholder="First Name"
       name="firstname" value={formData.firstname} onChange={handleChange}/>
    </div>
    <p style={{color: "red"}}>{formErrors.firstname}</p>

    <div className="form-group col-md-8 ">
      <input type="text" className="form-control"  placeholder="Last Name" 
      name="lastname" value={formData.lastname} onChange={handleChange}/>
    </div>

      <p style={{color: "red"}}>{formErrors.lastname}</p>
  
  <div className="form-group col-md-8">
    <input type="email" className="form-control"  placeholder="Email"
     name="email" value={formData.email} onChange={handleChange}/>
  </div>
  <p style={{color: "red"}}>{formErrors.email}</p>

  <div className="form-group col-md-8">
    <input type="password" className="form-control"  placeholder="Password" 
     name="password" value={formData.password} onChange={handleChange}/>
   
  </div>
  <p style={{color: "red"}}>{formErrors.password}</p>

  <div className="form-group col-md-8">
    <input type="password" className="form-control"  placeholder="Confirm Password" 
     name="confirmpassword" value={formData.confirmpassword} onChange={handleChange}/>
  </div>
  <p style={{color: "red"}}>{formErrors.confirmpassword}</p>
         <button type="submit">Sign up</button>
         <Link to="/login" className='fw-bold'>
            {"Already have an account? Login here"}
         </Link>
       </form>
    </>
  )
}

export default Signup
