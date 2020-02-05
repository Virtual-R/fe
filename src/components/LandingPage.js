import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Route, Redirect} from "react-router-dom"; 
import  {editProject,deleteProject} from '../actions/editProject';



const LandingPage = props => {
   
   const projects = useSelector( state => state.editProject);
   const dispatch = useDispatch();
   const handleDelete = event =>{
      event.preventDefault();
      dispatch(deleteProject(event.target.value));
      };
      console.log(projects)

   const handleEdit = event =>{
      event.preventDefault()
      dispatch(editProject(event.target.value))
   }
   return (
      <div>
         
       {projects.map((project,index)=>(
          <div key={index}>
          <p>Title: {project.title}</p>
          <p>Description: {project.description} </p>
          <p>Amount: </p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
          </div>
       ))} 
      </div>
   )
}


export default LandingPage;
