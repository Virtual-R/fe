import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./SignUpForm.scss";
// import axiosWithAuth from '../utils/axiosWithAuth';


function SignUpForm() {
  const { register, errors, handleSubmit } = useForm();
  const [user, setUser] = useState ({})

  const onSubmit = data => {
    const user = data;

    axios.post('https://sixr-clone.herokuapp.com/api/register', user)
    .then(res => setUser(res.data))
    .catch(err => console.log(err))
  } 

  console.log(user);
  
   
  return (
    <>
      <Link to='/login'>Login</Link>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input className="formItem" placeholder="John" type="text" name="firstName" ref={register({ required: true, maxLength: 20 })} />
        {errors.firstName && 'Uh Oh...First Name is required.'}

        <input className="formItem" placeholder="Doe" type="text" name="lastName" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
        {errors.lastName && 'Uh Oh...Last Name is required.'}

        <input className="formItem" type="email" placeholder="Johndoe@email.com" name="email" ref={register({required: true})}/>
        {errors.email && 'Uh Oh...An Email is required.'}

        <input className="formItem" placeholder="Age" name="age" type="number" ref={register({ min: 18})} />
        {errors.age && 'Uh Oh...You must be 18 years or older to sign-up.'}

        <input placeholder="Password" className="password" name="password" type="password" ref={register({required:true})}/>
        {errors.password && 'Uh Oh...A Password is required'}

        <input className="formItem" type="submit" />

      </form>
    </>
  );
}

export default SignUpForm;