import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { editProject, deleteProject } from "../actions/editProject";
import axiosWithAuth from "../utils/axiosWithAuth";
import NavBar from "./NavBar";

const LandingPage = (props,project_id, user_id) => {
  const [project, setProject] = useState([]);
  

  const dispatch = useDispatch();
  const handleDelete = event => {
    event.preventDefault();
    dispatch(deleteProject(event.target.value));
  };

  // const product = [project.find(product => product.id === id)];

 
  const handleEdit = event => {
    event.preventDefault();
    dispatch(editProject(event.target.value));
  };

  useEffect(() => {
    const userId = localStorage.getItem("user_id", user_id);
    const projectId = localStorage.getItem('project_id')
    axiosWithAuth()
    .get(`/api/users/${userId}/projects`,project)
    .then(response => {
      
        setProject([response.data[0]]);
        console.log('line 33', response.data);
        
      })
      .catch(error => {
        console.log(error);
        
      
      
      });
    
  }, [])
    
  

  return (
    <div>
      <NavBar/>
      {project.map((projects, index) => (
        <div key={index}>
          <p>Title: {projects.title}</p>
          <p>Description: {projects.description} </p>
          <p>Amount: {projects.goal_amount}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ))}
    </div>
   
  );
      }

export default LandingPage;
