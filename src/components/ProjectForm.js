import React, { useState } from "react";
import { addProject } from "../actions/addProject";
import { useDispatch } from "react-redux";
import Logoff from "./Logoff";
import { useHistory } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import "./ProjectForm.scss";

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
      <Form className="addProject" onSubmit={handleSubmit}>
        <Col form>
          <Row md={3}>
            <FormGroup className="titleClass">
              <Label className="titleLabel" for="title">Title</Label>

              <Input
                className="titleInput"
                type="text"
                name="title"
                value={newProject.title}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>

          <Row md={3}>
            <FormGroup className="descriptionClass">
              <Label className="descriptionLabel" for="Description"> Project Description</Label>
              <Input
                className="descriptionInput"
                type="text"
                name="description"
                value={newProject.description}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>
          <Row md={3}>
            <FormGroup className="amountClass">
              <Label className="amountLabel">Amount Needed</Label>
              <Input
              className="amountInput"
                type="number"
                name="goal_amount"
                value={newProject.goal_amount}
                onChange={handleChange}
              />
            </FormGroup>
          </Row>
          <Row>
          <Button className="buttonClassProject" type="submit">Add Project </Button>
          </Row>
        </Col>
      </Form>
    </>
  );
};
export default ProjectForm;
