import {LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS} from '../types/types';


const initialLoginState = {
  
   isLoading: false,
   users:[],
   errors: ''
   
}
export const loginReducer = (state = initialLoginState, action) =>{
   switch(action.type){
      case LOGIN_START: 
      return {
         ...state,
         isLoaded: true
      }

      case LOGIN_SUCCESS:
      return {
         ...state,
         isLoading:false,
         user:action.payload,
         errors: ''


      }
      case LOGIN_ERROR:
      return {
         ...state,
         error: action.payload
      }
      default:
      return state;
   }

}