import React from 'react';
import {Switch} from 'react-router-dom'

import './App.css';  
import LogInForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm';


function App() {
  return (
    <Switch>
      <div className="App">
        <SignUpForm/>
        <LogInForm />
      </div>
    </Switch>
  );
}

export default App;
