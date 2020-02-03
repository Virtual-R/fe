import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from '../types/types';
import axiosWithAuth from '../utils/axiosWithAuth';
export const login = (props) => dispatch=>{
   dispatch({type: LOGIN_START});
   axiosWithAuth()
   .post('')//api goes here
   .then(response=>{
      dispatch({type:LOGIN_SUCCESS, payload: response.data.results})
   })
   .catch(error =>dispatch({ type: LOGIN_ERROR, payload: error.response}))
   ;
}
