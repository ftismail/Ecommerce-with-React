import React, { Component } from 'react';
import FromInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils';
import './signin.scss'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:''
         }
    }
     handelSubmit = async (element)=>{
        element.preventDefault()
        const {email,password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        } catch (error) {
            console.error(error)
        }
        
    }
    handelChange = (element)=>{
        const {name,value} = element.target
        this.setState({[name]:value})
    }
    render() { 
        return ( 
            <div className='sign-in'>
                <h2 className='title'>i Realy have an account</h2>
                <span>Sign in with your email and password</span>
                <form action="" onSubmit={this.handelSubmit}>
                    <FromInput
                     type="email" 
                     name="email" 
                     value={this.state.email} 
                     label='email' 
                     handleChange={this.handelChange}
                     />
                    <FromInput 
                     type="password"
                     name="password" 
                     value={this.state.password}
                     label='password'
                     handleChange={this.handelChange}/>
                     <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignIn;