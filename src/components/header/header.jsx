import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../asset/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown'
import './header.scss'
const Header = (props) => {
    let signInOut = null
    if (props.currentUser) {
        signInOut =  (<div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>)
    } else {
        signInOut =( <Link className='option' to='/signin'>
                SIGNIN
            </Link>)
    }
    return ( 
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {signInOut}
            <CartIcon/>
            </div>
            {props.dropDown?(<CartDropDown/>):null}
            
        </div>
     );
}
 const mapStateToProps = (state)=>({
    currentUser:state.user.currentUser,
    dropDown:state.cart.hidden
 })
export default connect(mapStateToProps)(Header) ;