
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
 };

 export default validateForm