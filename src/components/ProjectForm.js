import React, { useState } from "react";
import { addProject } from "../actions/addProject";
import { useDispatch } from "react-redux";
import Logoff from "./Logoff";
import { useHistory } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import NavBar from "./NavBar";
import { connect } from "react-redux";

const ProjectForm = user_id => {
  const [newProject, setNewProject] = useState({
    user_id: JSON.parse(localStorage.getItem("user_id", user_id)),
    title: [],
    description: [],
    goal_amount: []
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(addProject(newProject));
    history.push("/");
    console.log("handle", newProject);
  };
  const handleChange = event => {
    event.preventDefault();
    setNewProject({
      ...newProject,
      [event.target.name]: event.target.value
    });
  };
  console.log(dispatch(addProject));
  console.log(newProject);

  return (
    <>
      <NavBar />
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="title">Title</Label>

              <Input
                type="text"
                name="title"
                value={newProject.title}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Label for="Description"> Description of Project</Label>
              <Input
                type="text"
                name="description"
                value={newProject.description}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Amount Needed</Label>
              <Input
                type="number"
                name="goal_amount"
                value={newProject.goal_amount}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Col md={6}>
          <Button type="submit">Add Project </Button>
        </Col>
      </Form>
    </>
  );
};
export default ProjectForm;
