import {LOGIN} from '../types/types';

const initialLoginState = {
   username:'',
   password:''
   
}
export const loginReducer = (state = initialLoginState, action) =>{
   switch(action.type){
      case LOGIN: 
      return {
         ...state,
         
      }
      default:
      return state;
   }
}