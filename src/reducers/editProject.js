import {EDIT_PROJECTS_START,EDIT_PROJECTS_SUCCESS, EDIT_PROJECTS_ERROR} from '../types/types';

const initialProductState = [{
   title: 'test',
   editingProduct: false,
   error:'',
   name:'',
   description:'test',
   amount:''
}

]

export const editProject = (state= initialProductState, action) => {
   switch(action.type){
      case EDIT_PROJECTS_START:
      return {
         ...state,
         addingProduct: false,
      }
      case EDIT_PROJECTS_SUCCESS:
      return {
         ...state,
         editingProduct: true,
         project: action.payload
      }

      case EDIT_PROJECTS_ERROR:
      return {
         ...state,
         error: action.payload
      }
      default:
      return state;
   }
}