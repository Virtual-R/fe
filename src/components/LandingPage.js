import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Route, Redirect} from "react-router-dom"; 
import  {editProject,deleteProject} from '../actions/editProject';



const LandingPage = props => {

   const [project, setProject] = useState([])
   
   // const projects = useSelector( state => state.editProject);
   const dispatch = useDispatch();
   const handleDelete = event =>{
      event.preventDefault();
      const product = [project.find(product => product.id === id)];
      dispatch(deleteProject(event.target.value));
      };
     
         if (window.confirm("Are you sure?!")) {
           setProject(landingpage.filter(product => product.id !== id));
     
           props.editProject(project);
     
           api()
             .delete(``)//will change
             .then(result => {
               console.log("Deleted");
             })
             .catch(error => {
               console.log(error);
               setProject([...project, product]);
             });
       };

      console.log(projects)

   const handleEdit = event =>{
      event.preventDefault()
      dispatch(editProject(event.target.value))
   }
   return (
      <div>
         
       {project.map((product, index)=>(
          <div key={product.id}>
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
