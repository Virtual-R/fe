import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SignUpForm.scss";
import axiosWithAuth from "../utils/axiosWithAuth";
import NavBar from "./NavBar";
// import axiosWithAuth from '../utils/axiosWithAuth';

function SignUpForm() {
  const { register, errors, handleSubmit } = useForm();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const history = useHistory();
  const signUp = event => {
    event.preventDefault();

    axiosWithAuth()
      .post("api/auth/register/",user)
      .then(response => {
        
        history.push("/login");
      })
      .catch(error => {
        console.log(error)
        
      });
  };
  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  console.log(user);

  return (
    <>
    <NavBar/>
      <form onSubmit={signUp}>
        <input
          className="formItem"
          placeholder="UserName"
          type="text"
          name="username"
          ref={register({ required: true, maxLength: 20 })}
          value={user.username}
          onChange={handleChange}
        />
        {errors.firstName && "Uh Oh...First Name is required."}

        <input
          placeholder="Password"
          className="password"
          name="password"
          type="password"
          ref={register({ required: true })}
          value={user.password}
          onChange={handleChange}
        />
        {errors.password && "Uh Oh...A Password is required"}

        <input className="formItem" type="submit" />
      </form>
    </>
  );
}

export default SignUpForm;
