import React, { useEffect, useState } from 'react'
import './signup.css';

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

 const  validateForm = (values) =>{
    const errors = {};
    const regex = 	/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  
    /*validate email*/
   if(!values.email){
    errors.email= "email is required!";
   }
   else if (!regex.test(values.email)){
    errors.email = "this is not a valid email format"
   }
   /*validates first name*/
   if(!values.firstname){
    errors.firstname = "first name is required!"
   }

   /*validates last name*/
   if(!values.lastname){
    errors.lastname = "last name is required!"
   }

   /*validates password*/
  if(!values.password){
    errors.password = "password is required!";
  }
   else if(values.password.length < 4){
    errors.password = "password too short";
   }
   else if(values.password.length > 10){
    errors.password = "password must not exceed 10 characters"
   }

   /*validates confirm password*/
    if(!values.confirmpassword){
      errors.confirmpassword = "this field is requred!"
    }
   else if(values.password !== values.confirmpassword){
    errors.confirmpassword = "password does not match!"
   }
   return errors;
 }

  return (
    <>
    {(Object.keys(formErrors).length === 0 && isSubmit) && (<p style={{textAlign: "center"}}>sign in was successful</p>)}
  <form onSubmit={handleSubmit}> 
    <h2>Sign Up</h2>
  <div className="form-row d-flex flex-wrap">
    <div className="form-group  me-1">
      <input type="text" className="form-control " placeholder="First Name"
       name="firstname" value={formData.firstname} onChange={handleChange}/>
    </div>

    <div className="form-group ">
      <input type="text" className="form-control"  placeholder="Last Name" 
      name="lastname" value={formData.lastname} onChange={handleChange}/>
    </div>
  </div>
  <p style={{color: "red"}}>{formErrors.firstname}</p>
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
