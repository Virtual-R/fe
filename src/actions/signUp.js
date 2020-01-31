import {SIGNUP_ERROR, SIGNUP_SUCCESS, SIGNUP_START} from '../types/types'
const initialSignUpState = {
   name: '',
   email:'',
   password:'',
   isLoading: false,
   isloaded: false
}

export const signup = (state = initialSignUpState, action) =>{
   switch(action.type){
      case SIGNUP_START:
      return{
         ...state,
         isLoading: true
   }
      case SIGN_SUCCESS:
      return {
         ...state,
         isloading: false,
         isLoaded: true


      }
      case SIGNUP_ERROR: 
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        error: action.payload

      }
      default:
      return state;
   }  
   
}