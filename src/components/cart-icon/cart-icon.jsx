import React from 'react';
import {connect} from 'react-redux';
import {cartAction} from '../../redux/cart/cart.action'
import {selectCartItemsCounter} from '../../redux/cart/cart.selector'
import {ReactComponent as ShoppingIcon} from '../../asset/shopping-bag.svg'
import './cart-icon.scss'
const CartIcon = ({toggleCartHidden,itemCount}) => {
    return ( 
        <div className='cart-icon' onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
     );
}
const mapStateToProps = (state)=>({
    itemCount:selectCartItemsCounter(state)
})
const mapDispatchToProps = (dispatch)=>({
    toggleCartHidden:() => dispatch(cartAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);