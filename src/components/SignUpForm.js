import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';

function SignUpForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
   
  return (
    <>
    <Link to='/login'>Login</Link>
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" name="firstName" ref={register({ required: true, maxLength: 20 })} />

      <input type="text" name="lastName" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />

      <input type="email" placeholder="Johndoe@email.com" name="email" ref={register({required: true})}/>
      
      <input name="age" type="number" ref={register({ min: 18, max: 150})} />

      <input type="submit" />

    </form>
    </>
  );
}

export default SignUpForm;