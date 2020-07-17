import React,{Component} from 'react';
import HomePage from './pages/home-page/homePage';
import {Switch,Route} from 'react-router-dom'
import Hats from './hats'
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
          <Route path='/hats' component={Hats} />
        </Switch>
      </div>
     );
  }
}
export default App;

