import React from 'react';
import './signin-page.scss';
import SignIn from '../../components/signin/signin'
import SignUp from '../../components/sinup/sign-up'
const SignInPage = () => {
    return ( 
        <div className='signin-page' >
            <SignIn/>
            <SignUp/>
        </div>
     );
}
 
export default SignInPage;