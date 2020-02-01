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
import { addProduct } from "./reducers/addProduct";
import {editProduct} from'./reducers/editProduct';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  addProduct: addProduct,
  editProduct: editProduct
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
