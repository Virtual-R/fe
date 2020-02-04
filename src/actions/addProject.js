import {ADD_PROJECTS_START,ADD_PROJECTS_SUCCESS, ADD_PROJECTS_ERROR} from '../types/types';
import axiosWithAuth from '../utils/axiosWithAuth';
export const addProject = () => dispatch=>{
   dispatch({type: ADD_PROJECTS_START});
   axiosWithAuth()
   .put('')//api goes here
   .then(response=>{
      dispatch({type:ADD_PROJECTS_SUCCESS, payload: response.data.results})
   })
   .catch(error =>dispatch({ type: ADD_PROJECTS_ERROR, payload: error.response}))
}