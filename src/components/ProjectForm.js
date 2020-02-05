import React , {useState} from 'react';
import { addProject } from '../reducers/addProject';
import {useDispatch} from 'react-redux';
import Logoff from './Logoff';


 const ProjectForm = (props) => {
    const [newProject, setNewProject] = useState({
       title:'',
       name:'',
       description:'',
       amount:'',
    });
 
    const dispatch = useDispatch()
    const handleChange=(event)=>{
       event.preventDefault()
      setNewProject({
         ...newProject,
         [event.target.name]: event.target.value
      })
    }
    console.log(newProject)
    const handleSubmit =(event) =>{
       event.preventDefault();
       dispatch(addProject(newProject));
       props.history.push('/landingpage')
       
    }
   
   return (
      <form onSubmit={handleSubmit}>
         <label>
           Title:
           <input type='text' name='title' value={newProject.title} onChange={handleChange}/>
         </label>
         <label>
            Name of Project:
         <input type="text" name='name' value={newProject.name} onChange={handleChange}/>
         </label>
         <label> Description of Project: <input type='text' name='description' value={newProject.description} onChange={handleChange}></input></label>
         <label>Amount Needed: <input type="text" name='amount' value={newProject.amount} onChange={handleChange}/></label>
         <button type='submit'>Add Project: </button>
        
         </form>
   )
}
export default ProjectForm;

