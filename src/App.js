import React from 'react';
import {Switch} from 'react-router-dom'
import './App.css';  
import LogInForm from './components/LogInForm'

function App() {
  return (
    <Switch>
    <LogInForm />
    </Switch>
  );
}

export default App;
