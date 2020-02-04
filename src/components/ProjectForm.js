import React , {useState} from 'react';
import { addProject } from '../reducers/addProject';
import {useDispatch} from 'react-redux';


 const ProjectForm = () => {
    const [newProject, setNewProject] = useState({
       name:'',
       description:'',
       amount:'',
    });
    const dispatch = useDispatch()
    const handleSubmit=(event)=>{
       event.preventDefault()
      setNewProject({
         ...newProject,
         [event.target.name]: event.target.value
      })
    }
    const handleChange =(event) =>{
       event.preventDefault();
       dispatch(addProject(newProject));

    }
   return (
      <form onSubmit={handleSubmit}>
         <label>
            Name of Project
         <input type="text" name='name' value={newProject.name} onChange={handleChange}/>
         </label>
         <label> Description of Project<input type='text' name='description' value={newProject.description} onChange={handleChange}></input></label>
         <label>Amount Needed<input type="text" name='amount' value={newProject.amount} onChange={handleChange}/></label>
         <button type='submit'>Add Project</button>
         </form>
   )
}
export default ProjectForm;

