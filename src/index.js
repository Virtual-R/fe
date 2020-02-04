import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { signUpReducer } from "./reducers/signUpReducer";
import { loginReducer } from "./reducers/loginReducer";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import { addProject } from "./reducers/addProject";
import {editProject} from'./reducers/editProject';
import logger from 'redux-logger'
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  addProject: addProject,
  editProject: editProject
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
