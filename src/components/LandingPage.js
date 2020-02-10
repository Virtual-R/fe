import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { editProject, deleteProject } from "../actions/editProject";
import axiosWithAuth from "../utils/axiosWithAuth";

const LandingPage = (props, id) => {
  const [project, setProject] = useState([]);

  const dispatch = useDispatch();
  const handleDelete = event => {
    event.preventDefault();
    dispatch(deleteProject(event.target.value));
  };

  const product = [project.find(product => product.id === id)];

  if (window.confirm("Are you sure?!")) {
    setProject(project.filter(product => product.id !== id));
    props.editProject(project);

    axiosWithAuth()
      .delete(`https://sixr-clone.herokuapp.com/:userId/projects/:id`)
      .then(result => {
        console.log("Deleted");
      })
      .catch(error => {
        console.log(error);
        setProject([...project, product]);
      });
  }

  console.log(project);

  const handleEdit = event => {
    event.preventDefault();
    dispatch(editProject(event.target.value));
  };
  return (
    <div>
      {project.map((product, index) => (
        <div key={product.id}>
          <p>Title: {project.title}</p>
          <p>Description: {project.description} </p>
          <p>Amount: </p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
