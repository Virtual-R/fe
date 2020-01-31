import {EDIT_PRODECTS_START,EDIT_PROJECTS_SUCCESS, EDIT_PROJECTS_ERROR} from '../types/types';
import axiosWithAuth from '../utils/axiosWithAuth';
export const addProduct = () => dispatch=>{
   dispatch({type: EDIT_PRODECTS_START});
   axiosWithAuth()
   .post('')//api goes here
   .then(response=>{
      dispatch({type:EDIT_PROJECTS_SUCCESS, payload: response.data.results})
   })
   .catch(error =>dispatch({ type: EDIT_PROJECTS_ERROR, payload: error.response}))
}
