import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../asset/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import './header.scss'
const Header = (props) => {
    let signInOut = null
    if (props.currentUser) {
        signInOut =  (<div className='option' onClick={()=>auth.signOut()}>Signout</div>)
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
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {signInOut}
            </div>
        </div>
     );
}
 
export default Header;