import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DashboardContainer from "./components/dashboard";
import './App.css';  
import LogInForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm';
import LandingPage from './components/LandingPage';
import ProjectForm from './components/ProjectForm';
import EditProjectForm from './components/EditProductForm';
import "./App.css";
import Logoff from "./components/Logoff";
import { PrivateRoute } from "./components/PrivateRoute";
import NavBar from "./components/NavBar"
import signUproute from './components/signupRoute';

function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
      <Route path ='/login' component={LogInForm}/>
      <Route  exact path='/' component={DashboardContainer}/>
      {/* <Route path='/addproject' component={ProjectForm}/> */}
      <Route path='/editproject' component={EditProjectForm}/>
      <Route path='/landingpage' component={LandingPage}/>
      <PrivateRoute exact path="/addproject" component={ProjectForm} />
      <Route path="/logoff" component={Logoff} />  
      <Route path='/signup' component={signUproute}/>   </Switch>
   
      

    </div>
    </Router>
    

  );
}

export default App;
