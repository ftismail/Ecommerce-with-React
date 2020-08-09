import React from 'react';
import Button from '../custom-button/custom-button'
import './cart-dropdown.scss'
const CartDropDown = () => {
    return ( 
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <Button otherClasses='dropdown-btn just-try-class'>GO TO CHECK OUT</Button>
            </div>
        </div>
     );
}
 
export default CartDropDown;