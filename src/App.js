import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/home-page/homePage';
import Shop from './pages/shop-page/shop';
import './app.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
     );
  }
}
export default App;

