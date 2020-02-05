import React from 'react';
import {Switch, Route} from 'react-router-dom';
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
<<<<<<< HEAD
import NavBar from "./components/NavBar"
=======
import DashboardCard from './components/dashboardCard';
>>>>>>> 8299f88dd5175f1d8da2676df7a8e668c1601d81


function App() {
  return (
    <div className="App">
<<<<<<< HEAD

=======
      
>>>>>>> 8299f88dd5175f1d8da2676df7a8e668c1601d81
      <Switch>
        
      <Route path ='/login' component={LogInForm}/>
      <Route  exact path='/' component={DashboardContainer}/>
      <Route path='/addproject' component={ProjectForm}/>
      <Route path='/editproject' component={EditProjectForm}/>
      <Route path='/landingpage' component={LandingPage}/>
      <PrivateRoute exact path="/addproject" component={ProjectForm} />
<<<<<<< HEAD
      <Route path="/logoff" component={Logoff} />      </Switch>
      <DashboardContainer/>
      

=======
      <Route path="/logoff" component={Logoff} />     
      
       </Switch>
      
>>>>>>> 8299f88dd5175f1d8da2676df7a8e668c1601d81
    </div>
    

  );
}

export default App;
