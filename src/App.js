import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';  
import LogInForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm';
import LandingPage from './components/LandingPage';
import ProjectForm from './components/ProjectForm';
import EditProjectForm from './components/EditProductForm';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path ='/login' component={LogInForm}/>
      <Route  exact path='/' component={SignUpForm}/>
      <Route path='/addproject' component={ProjectForm}/>
      <Route path='/editproduct' component={EditProjectForm}/>
      <Route path='/landingpage' component={LandingPage}/>
      
    </Switch>
      </div>
  );
}

export default App;
