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

    axios
      .post("https://sixr-clone.herokuapp.com/api/auth/register/", user)
      .then(res => {
        console.log(res, "res");
        history.push("/login");
      })
      .catch(err => console.log(err));
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
