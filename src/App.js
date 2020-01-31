import React from 'react';
import {Switch} from 'react-router-dom'
import './App.css';  
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <Switch>
    <div className="App">
      <SignUpForm/>
    </div>
    </Switch>
  );
}

export default App;
