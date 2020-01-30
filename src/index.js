import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { signUpReducer } from './reducers/signUpReducer';
import { loginReducer} from './reducers/loginReducer'
const rootReducer = combineReducers({
   login: loginReducer,
   signup: signUpReducer

})
const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
