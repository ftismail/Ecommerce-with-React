import React from 'react';
import Button from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {withRouter} from 'react-router-dom'
import{connect} from 'react-redux'
import './cart-dropdown.scss'
const CartDropDown = ({cartItems,history}) => {
    return ( 
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length?
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :(<span className="empyt-message" >Your card is empty</span>)
                }
            </div>
            <Button onClick={()=>history.push('/checkout')} otherClasses='dropdown-btn just-try-class'>GO TO CHECK OUT</Button>
        </div>
     );
}
 const mapStateToProps = createStructuredSelector({
     cartItems:selectCartItems
 })
 
export default withRouter(connect(mapStateToProps)(CartDropDown)) ;