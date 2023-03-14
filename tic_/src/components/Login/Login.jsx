import React from 'react'
import { useEffect, useState } from 'react';
import './login.css';

const Login = () => {
  /*used to validate the form */
  const initialValues = {email: "", password: ""}
  const [formValues, setFormValues] = useState(initialValues);
  const [handleFormErrors, setHandleFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) =>{
   const {name, value} = event.target; /*used to assign the name and the value that will be entered*/
   setFormValues({...formValues, [name]: value}) /*[] takes the name as key and assign value to it*/
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setHandleFormErrors(validateForm(formValues))
    setIsSubmit(true);
  }
  useEffect(()=>{
  if(Object.keys(handleFormErrors).length === 0 && isSubmit)
    {console.log(formValues)}
  }, [handleFormErrors]);

  const validateForm = (values)=>{
   const errors = {};
   const regex = 	/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

   if(!values.email){
    errors.email= "email is required!";
   }else if (!regex.test(values.email)){
    errors.email = "this is not a valid email format"
   }

   if(!values.password){
    errors.password = "password is required!";
   } else if(values.password.length < 4){
    errors.password = "password too short"
   }else if(values.password.length > 10){
    errors.password = "password cannot exceed 10 characters"
   }
 

   return errors;
  };

  return (
    <>
    {(Object.keys(handleFormErrors).length === 0 && isSubmit) && (<p style={{textAlign: "center"}}>Logged in successful</p>)}
    <form onSubmit={handleSubmit}> 
    
    <h2>Log In</h2>
  <div className="form-group col-md-8">
    <input type="email" 
    className="form-control" 
     placeholder="Email" 
     name="email"
     value={formValues.email} /*used to link the input field to the usestate*/
     onChange={handleChange}/>
  </div>
  <p style={{color: "red"}}>{handleFormErrors.email}</p>
  <div className="form-group col-md-8">
    <input type="password"
     className="form-control" 
     placeholder="Password" 
     name="password"
     value={formValues.password}/*used to link the input field to the usestate*/
     onChange={handleChange}/> {/*used to update the value of the state*/}
  </div>
 <p style={{color: "red"}}>{handleFormErrors.password}</p>
  <label>
    <input type="checkbox"/><small>Remember me</small>
  </label>
  <button>Login</button>
  <div className="d-flex justify-content-lg-between">
  <small className="me-5">Don't have an account?</small>
  <small className='ms-5'>Forget password</small>
  </div>
  
  </form>
    </>

  )
}

export default Login
