import ADD_PRODUCT from '../types/types'
initialProductState ={
   product_id: Date.now,
   user_id: Date.now,
   name:'',
   description:'',
   goal_amount:'',
   amount_received:''
}
export const addProduct = (state= initialProductState, action) => {
   switch(action.type){
      case ADD_PRODUCT:
      return {
         
      }
      default:
      return state;
   }
}