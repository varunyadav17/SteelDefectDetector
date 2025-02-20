import React, {Component} from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import LoginScreen from './LoginScreen'
//injectTapEventPlugin();

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loginPage:[],
      uploadScreen:[]
    }
  }

  componentWillMount(){
    var loginPage = [];
    loginPage.push(<LoginScreen parentContext = {this}/>);
    this.setState({loginPage:loginPage})
  }

  render(){
    return(
      <div className = "App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

const style = {
  margin: 15,
}

export default App;
