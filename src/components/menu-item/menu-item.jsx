import React from 'react';
import './menu-item.scss';
import {withRouter} from 'react-router-dom'
const MenuItem = ({title,imageUrl,size,history,match}) => {
    return ( 
        <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${title}`)} >
            <div className="background-img" style={{backgroundImage:`url(${imageUrl})`}}/>
                    <div className=  "content">
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <span>Shope Now</span>
                    </div>
                </div>
     );
}
export default withRouter(MenuItem) ;