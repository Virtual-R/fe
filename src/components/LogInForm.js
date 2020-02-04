import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import styled from "styled-components";
import {useDispatch, useSelector, connect} from 'react-redux';
import {login} from '../actions/login';
import {useState} from 'react';

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

function LogInForm() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loading] = React.useState(false);
  // const dispatch = useDispatch();
  // const user = useSelector(state=>state.login)
  const [users, setUsers] = useState([])
 
  const handleChange = event =>{
    setUsers({
      ...users, [event.target.name] : event.target.value
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
            type="email"
            name="email"
            value={users.username}
            placeholder="john@mail.com"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            value={users.password}
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

const  mapDispatchToProps={
  login
}
function mapStateToProps(state) {
  return{
  isLoading: state.login.isLoading,
  error: state.login.error,
  user: state.login.username,
  password: state.login.password
}
}

export default connect(mapStateToProps,mapDispatchToProps)(LogInForm)