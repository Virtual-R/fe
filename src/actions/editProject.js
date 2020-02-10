import {EDIT_PROJECTS_START,EDIT_PROJECTS_SUCCESS, EDIT_PROJECTS_ERROR, DELETE_PROJECTS_SUCCESS, DELETE_PROJECTS_START, DELETE_PROJECTS_ERROR} from '../types/types';
import axiosWithAuth from '../utils/axiosWithAuth';

export const editProject = () => dispatch=>{
   dispatch({type: EDIT_PROJECTS_START});
   const userId = localStorage.getItem('user_id')
   const projectid = localStorage.getItem('project_id')
   axiosWithAuth()
   .put(`${userId}/projects/${projectid}`)//api goes here
   .then(response=>{
      dispatch({type:EDIT_PROJECTS_SUCCESS, payload: response.data})
   })
   .catch(error =>dispatch({ type: EDIT_PROJECTS_ERROR, payload: error.response}))
}

export const deleteProject = () => dispatch =>{
   const userId = localStorage.getItem('user_id')
   const projectid = localStorage.getItem('project_id')
   dispatch({type: DELETE_PROJECTS_START});
   axiosWithAuth()
   .delete(`${userId}projects/${projectid}`)
   .then(response=>{
      console.log(response);
      dispatch({type:DELETE_PROJECTS_SUCCESS, payload: response.data})
   })
   .catch(error=>dispatch({DELETE_PROJECTS_ERROR, payload:error.response}))


}