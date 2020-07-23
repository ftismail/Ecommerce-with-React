import React from 'react';
import FormInput from '../form-input/form-input'
import Button from '../custom-button/custom-button'
import {auth,createUserProfileDocument,} from '../../firebase/firebase.utils'
import './sign-up.scss'
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayName:'',
            email:'',
            password:'',
            conformPassword:'',
         }
    }
    handelSubmit = async (e)=> {
        e.preventDefault()
        const {displayName,email,password,conformPassword} = this.state
        if (password !== conformPassword ) {
            alert('password Dont match')
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                conformPassword:'',
            })
        } catch (error) {
            console.error(error)
        }
    }
    hendelChange=(event)=>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }
    render() { 
        const {displayName,email,password,conformPassword} = this.state
        return ( 
            <div className='sign-up'>
                <h2 className='title'> i dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    onChange={this.hendelChange}
                    value={displayName}
                    label='displayName'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    onChange={this.hendelChange}
                    value={email}
                    label='email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    onChange={this.hendelChange}
                    value={password}
                    label='password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='conformPassword'
                    onChange={this.hendelChange}
                    value={conformPassword}
                    label='password'
                    required
                    />
                    <Button type='submit'>SIGN UP</Button>
                </form>
            </div>
         );
    }
}
 
export default SignUp;