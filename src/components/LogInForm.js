import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import styled from "styled-components";

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

export default function LogInForm() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loading] = React.useState(false);

  return (
    <Div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          // Auth handler
        }}
      >
        <H2>Log in</H2>

        <FormGroup>
          <Input
            type="email"
            name="email"
            value={userEmail}
            placeholder="john@mail.com"
            onChange={e => setUserEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            value={userPassword}
            placeholder="Password"
            onChange={e => setUserPassword(e.target.value)}
          />
        </FormGroup>

        <Button type="submit" disabled={loading} block={true}>
          {loading ? "Loading..." : "Sign In"}
        </Button>
      </Form>
    </Div>
  );
}
