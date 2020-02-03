import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function SignUpForm() {
  const { register, errors, handleSubmit } = useForm();
  const [user, setUser] = useState ({})

  const onSubmit = data => {
    const user = data;

    axios.post('/api/register', user)
    .then(res => setUser(res.data))
    .catch(err => console.log(err))
  } 

  console.log(user)
  
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input placeholder="John" type="text" name="firstName" ref={register({ required: true, maxLength: 20 })} />
      {errors.firstName && 'Uh Oh...First Name is required.'}

      <input placeholder="Doe" type="text" name="lastName" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
      {errors.lastName && 'Uh Oh...Last Name is required.'}

      <input type="email" placeholder="Johndoe@email.com" name="email" ref={register({required: true})}/>
      {errors.email && 'Uh Oh...An Email is required.'}

      <input placeholder="Age" name="age" type="number" ref={register({ min: 18})} />
      {errors.age && 'Uh Oh...You must be 18 years or older to sign-up.'}

      <input type="submit" />

    </form>
  );
}

export default SignUpForm;