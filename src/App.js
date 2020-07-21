import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header'
import HomePage from './pages/home-page/homePage';
import ShopPage from './pages/shop-page/shop';
import SignInPage from './pages/sign-in/signin-page'
import './app.css'
import {auth} from './firebase/firebase.utils'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser:null
     }
  }
  justName = null
  componentDidMount(){
    this.justName = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.justName()
  }
  render() { 
    return ( 
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </div>
     );
  }
}
export default App;

