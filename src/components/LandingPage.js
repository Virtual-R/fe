import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { editProject, deleteProject } from "../actions/editProject";
import axiosWithAuth from "../utils/axiosWithAuth";

const LandingPage = (props, user_id,project_id) => {
  const [project, setProject] = useState(
    [{
   
    user_id: JSON.parse(localStorage.getItem("user_id", user_id)),
    title: [],
    description: [],
    goal_amount: [],
    project_id: JSON.parse(localStorage.getItem("project_id", project_id))
    }]
  );
  

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
    const userId = localStorage.getItem('user_id')
    const projectId = localStorage.getItem('project_id')
    axiosWithAuth()
    .get(`${userId}/projects/${projectId}`)
    .then(result => {
      
        setProject(result.data);
        console.log("project", result.data);
        
      })
      .catch(error => {
        console.log(error);
        
      
      
      });
    
  }, [project])
    
  

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
      }

export default LandingPage;
