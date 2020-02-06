import React , {useState} from 'react';
import { addProject } from '../reducers/addProject';
import {useDispatch} from 'react-redux';
import Logoff from './Logoff';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


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
      <Form onSubmit={handleSubmit}>
      <Row form>
      <Col md={3}>
      <FormGroup>
         <Label for ="title">Title</Label>
         
           <Input type='text' name='title' value={newProject.title} onChange={handleChange}/>
           </FormGroup>
           </Col>
      <Col md={3}>
      <FormGroup>
         <Label for='name of project'> Name of Project</Label>
           
         <Input type="text" name='name' value={newProject.name} onChange={handleChange}/>
         </FormGroup>
         </Col>
         </Row>
         <Row form>
         <Col md={3}>
         <FormGroup>
         <Label for='Description'> Description of Project</Label>
         <Input type='text' name='description' value={newProject.description} onChange={handleChange}/>
         </FormGroup>
         </Col>
         <Col md={3}>
         <FormGroup>
         <Label>Amount Needed</Label> 
         <Input type="text" name='amount' value={newProject.amount} onChange={handleChange}/>
         </FormGroup>

         </Col>
         </Row>
         <Col md={6}>
         <Button type='submit'>Add Project </Button>
         </Col>
         </Form>
   )
}
export default ProjectForm;

