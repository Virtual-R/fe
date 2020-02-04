import {SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR} from '../types/types';
import axiosWithAuth from '../utils/axiosWithAuth';

export const signUp =()=>dispatch=>{
   dispatch({ type: SIGNUP_START});
   axiosWithAuth()
   .post('')//api goes here
   .then(response=>{
      dispatch({type: SIGNUP_SUCCESS, payload: response.data.results})
   })
   .catch(error=>dispatch({type: SIGNUP_ERROR, payload: error.response}))
};
