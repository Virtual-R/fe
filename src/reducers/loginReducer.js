import {LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS} from '../types/types';

const initialLoginState = {
   username:'',
   password:'',
   isLoading: false,
   isLoaded: false
   
}
export const loginReducer = (state = initialLoginState, action) =>{
   switch(action.type){
      case LOGIN_START: 
      return {
         ...state,
         
      }

      case LOGIN_SUCCESS:
      return {
         ...state,

      }
      case LOGIN_ERROR:
      return {
         ...state,
      }
      default:
      return state;
   }

}