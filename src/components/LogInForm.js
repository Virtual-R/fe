import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const H2 = styled.h2`
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 3px black;
`;
const Div = styled.div`
  background-color: #035a70;
  width: 174px;
  margin-left: 150px;
`;


  export default function LogInForm(props) {
   
    const [loading] = React.useState(false);
    const [user,setUser] = React.useState({
      username:'',
      password:'',
    })
    let history = useHistory();
    const login = event => {
      event.preventDefault()
      axiosWithAuth()
      .post('/api/auth/login',user)
      .then(response=>{
        console.log('response',response.data)
        console.log('props',props)
        
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('userId',response.data.id)
        history.push('/addproject')
      })
      .catch(error=> error.response)
      

      
    }
    const handleChange = (event) =>{
      event.preventDefault();
      setUser({
        ...user, [event.target.name] : event.target.value
      })
    }
  
    return (
      <Div>
        <Form
          onSubmit={login}
        >
          <H2>Log in</H2>
  
          <FormGroup>
            <Input
              type="username"
              name="username"
              value={user.username}
              placeholder="UserName"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </FormGroup>
  
          <Button type="submit" disabled={loading} block={true}>
            {loading ? "Loading..." : "Sign In"}
          </Button>
        </Form>
      </Div>
    );
  }