import React,{Component} from 'react';
import HomePage from './pages/home-page/homePage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <HomePage/>
      </div>
     );
  }
}
export default App;

