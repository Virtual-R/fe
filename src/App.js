import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import LandingPage from "./components/LandingPage";
import ProjectForm from "./components/ProjectForm";
import Logoff from "./components/Logoff";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/addproject" component={ProjectForm} />
        <Route path="/login" component={LogInForm} />
        <Route exact path="/" component={SignUpForm} />
        {/* <Route path='/dashboard' component={DashBoard}/> */}
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/logoff" component={Logoff} />
      </Switch>
    </div>
  );
}

export default App;
