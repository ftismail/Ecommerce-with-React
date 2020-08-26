import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import Header from './components/header/header';
import HomePage from './pages/home-page/homePage';
import ShopPage from './pages/shop-page/shop';
import SignInPage from './pages/sign-in/signin-page';
import CheckoutPage from './pages/checkout-page/checkout'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
import {userAction} from './redux/user/user.action'
import './app.css'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
class App extends Component {
  justName = null
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.justName = auth.onAuthStateChanged(async user=>{
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({currentUser:{id:snapShot.id,...snapShot.data()}})
        })
      }
       else{
         setCurrentUser(user)
       }
    })
  }
  componentWillUnmount(){
    this.justName()
  }
  render() { 
    return ( 
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=> this.props.currentUser?<Redirect to='/' />:(<SignInPage/>)} />
          <Route path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
     );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
})
const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(userAction(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App) ;

