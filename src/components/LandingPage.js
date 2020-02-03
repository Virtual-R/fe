import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import  {editProject,deleteProject} from '../actions/editProject';
import ProjectForm from './ProjectForm';


const LandingPage = props => {
   
   const projects = useSelector( state => state.projects);
   const dispatch = useDispatch();
   const handleDelete = event =>{
      event.preventDefault();
      dispatch(deleteProject(event.target.value));
      };

   const handleEdit = event =>{
      event.preventDefault()
      
      dispatch(editProject(event.target.value))
   }
   return (
      <div>
         <ProjectForm/>
       {/* {projects.map((project)=>(
          <div key={project.id}></div>
       ))}  */}
       <button onClick={handleDelete}>Delete</button>
       <button onClick={handleEdit}>Edit</button>
      </div>
   )
}


export default LandingPage
