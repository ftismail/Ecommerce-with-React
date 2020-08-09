import {cartActionsTypes} from './cart.type'
export const cartAction = () => ({
    type:cartActionsTypes.TOGGLE_CART_HIDDEN
}) 
export const addItem = (item)=>({
    type:cartActionsTypes.ADD_ITEM,
    payload:item
})
