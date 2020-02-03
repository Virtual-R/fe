import React , {useState}from  'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import {signUp} from '../actions/signUp';
import {useSelector,useDispatch} from 'react-redux';

function SignUpForm() {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.signup)
  console.log("user",user.password)
  const { register, handleSubmit } = useForm()
  const [users, setUsers] = useState({
    email:'',
    username:'',
    password:'',
  })
  // const onSubmit = data => console.log(data)
  const onSubmit = (event,props) =>{
    // event.preventDefault();
    dispatch(signUp(setUsers))
    props.history.push('/landingpage')

  }
  const handleChange = (event)=>{
    event.preventDefault()
    setUsers({
      ...users,
      [event.target.name] : event.target.value

    })
  }
   
  return (
    <>
    <Link to='/login'>Login</Link>
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" name="firstName" ref={register({ required: true, maxLength: 20 })} value={users.username} onChange={handleChange}/>

      <input type="text" name="lastName" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />

      <input type="email" placeholder="Johndoe@email.com" name="email" ref={register({required: true})}/>
      
      <input name="age" type="number" ref={register({ min: 18, max: 150})} />

      <input type="submit" />

    </form>
    </>
  );
}

export default SignUpForm;