import React, { Component } from 'react';
import ShopData from './shopData';
import CollectionPreview from '../../components/collection-preview/collection-preveiw'
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collection:ShopData
         }
    }
    render() { 
        return ( 
            <div>
                 {
                     this.state.collection.map(({id,title,items})=>(
                        <CollectionPreview key={id} title={title} items={items} />
                     ))
                 }
            </div>
         );
    }
}
 
export default Shop;