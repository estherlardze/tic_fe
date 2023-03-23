import React, { useEffect, useState }from 'react';
import validateForm from './LoginValidation';
import './login.css';
import image from '../../assets/bg1.jpg';
import {Link} from 'react-router-dom';


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

  return (
    <>
    {(Object.keys(handleFormErrors).length === 0 && isSubmit) && 
    (<p style={{textAlign: "center"}}>Logged in successful</p>)}
    <form onSubmit={handleSubmit}> 
  <img src={image} alt="backgroung image" className='image'/>
  <p className='welcome--chat'>
    Hola! <br />
    Nice to hear from you
  </p>
  <p className='welcome--reply'>And you, too</p>
  <h2>Sign In</h2>
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
   <button>Login</button>
   <div className="d-flex  justify-content-lg-between">

   <Link to="/signup" className="fw-bold me-2">
                  {"Don't have an account? Sign Up"}
                </Link>
    
 
   </div>
 </form>
    </>
  )
}
export default Login
