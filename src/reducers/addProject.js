import {ADD_PROJECTS_START,ADD_PROJECTS_SUCCESS, ADD_PROJECTS_ERROR} from '../types/types';

const initialProductState ={
   title: '',
   addingProduct: false,
   error:''

   }

export const addProject = (state = initialProductState, action) => {
   switch(action.type){
      case ADD_PROJECTS_START:
      return {
         ...state,
         addingProduct: false,
      }
      case ADD_PROJECTS_SUCCESS:
      return {
         ...state,
         addingProduct: true,
         project: action.payload
      }

      case ADD_PROJECTS_ERROR:
      return {
         ...state,
         error: action.payload
      }
      default:
      return state;
   }
}