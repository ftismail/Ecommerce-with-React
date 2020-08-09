import React from 'react';
import Button from '../custom-button/custom-button'
import {connect} from 'react-redux'
import {addItem} from '.././../redux/cart/cart.action'
import './collection-item.scss'

const CollectionItem = ({item,addItem}) => {
    const {imageUrl,price,name}=item
    return ( 
        <div className='collection-item'>
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
            <Button otherClasses='inverted' onClick={()=>addItem(item)} >Add To The Cart</Button>
        </div>
     );
}
 const mapDispatchToProps=(dispatch)=>({
     addItem:item=>dispatch(addItem(item))
 })
export default connect(null,mapDispatchToProps) (CollectionItem);