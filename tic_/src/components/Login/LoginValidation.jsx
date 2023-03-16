import React from "react";

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

   export default validateForm;