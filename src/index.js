import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { signUpReducer } from "./reducers/signUpReducer";
import { loginReducer } from "./reducers/loginReducer";
import { BrowserRouter as Router } from "react-router-dom";
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
