import React from 'react';
import './cart-item.scss'
const cartItem = ({item:{imageUrl,price,name,quantity}}) => {
    return ( 
        <div className='cart-item' >
            <img src={imageUrl} alt="" srcset=""/>
            <div className='item-details'>
                <span className='name'>{price}</span>
                <span className='name'>{quantity} X ${name}</span>
            </div>
        </div>
     );
}
 
export default cartItem;