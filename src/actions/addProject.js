import {ADD_PROJECTS_START,ADD_PROJECTS_SUCCESS, ADD_PROJECTS_ERROR} from '../types/types';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
export const addProject = (userId) => dispatch=>{
   dispatch({type: ADD_PROJECTS_START});
   const userId = localStorage.getItem('userId')
   
   axiosWithAuth()
   .post(`api/users/${userId}/projects`)
   .then(response=>{
      dispatch({type:ADD_PROJECTS_SUCCESS, payload: response.data})
      console.log('add',response.data)
   })
   .catch(error =>dispatch({ type: ADD_PROJECTS_ERROR, payload: error.response}))
}
