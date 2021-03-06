import {createSelector} from 'reselect'
const selectCart = state=>state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)
export const selectHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
)
export const selectCartItemsCounter = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,0)
)
