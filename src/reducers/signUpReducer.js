import {SIGNUP_ERROR, SIGNUP_SUCCESS, SIGNUP_START} from '../types/types'
const initialSignUpState = {
   username:'',
   password:'',
   email:'',
   user:[],
   isLoading: false,
   error: ''
}

export const signUpReducer = (state = initialSignUpState, action) =>{
   switch(action.type){
      case SIGNUP_START:
      return{
         ...state,
         isLoading: true
   }
      case SIGNUP_SUCCESS:
      return {
         ...state,
         isloading: false,
         users:[],
         


      }
      case SIGNUP_ERROR: 
      return {
        ...state,
        error: action.payload

      }
      default:
      return state;
   }  
   
}

