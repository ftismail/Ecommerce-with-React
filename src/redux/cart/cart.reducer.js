import {cartActionsTypes} from './cart.type'
const INITIAL_STATE = {
    hidden:false,
    cartItems:[]
}
const cartReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case cartActionsTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            case cartActionsTypes.ADD_ITEM:
                return{
                    ...state,
                    cartItems:[...state.cartItems,action.payload]
                }
        default:
            return state
    }
}
export default cartReducer