import React from 'react';
import Button from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item'
import{connect} from 'react-redux'
import './cart-dropdown.scss'
const CartDropDown = (props) => {
    return ( 
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {props.cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <Button otherClasses='dropdown-btn just-try-class'>GO TO CHECK OUT</Button>
        </div>
     );
}
 const mapStateToProps = ({cart:{cartItems}})=>({
     cartItems
 })
 
export default connect(mapStateToProps)(CartDropDown);