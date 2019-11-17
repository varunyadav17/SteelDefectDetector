import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import FileUpload from './FileUpload'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }

  handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      "userid":this.state.username,
      "password":this.state.password
    }
    axios.post(apiBaseUrl + 'login', payload).then(function(response) {
      console.log(response);
      if(response.data.code == 200){
        console.log("Login successfull");
        /*var uploadScreen = [];
        uploadScreen.push(<UploadPage appContext = {self.props.appContext}/>)
        self.props.appContext.setState({loginPage:[], uploadScreen:uploadScreen})*/
        var loginscreen = [];
        var loginmessage = [];
        loginscreen.push(<FileUpload parentContext = {this}/>);
        loginmessage = "Please upload a file";
        self.props.parentContext.setState({
          loginscreen:loginscreen,
          loginmessage:loginmessage,
          buttonLabel:"Logout",
          isLogin:true
        })
      }
      else if(response.data.code == 204){
        console.log("Username password do not match");
        alert("Username Password do not match")
      }
      else{
        console.log("Username does not exist");
        alert("Username does not exist");
      }
    })
    .catch(function(error){
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login"/>
            <TextField hintText = "Enter your Username" floatingLabelText = "Username" onChange = {(event, newValue) =>
              this.setState({username:newValue})}/>
            <br/>
            <TextField type = "password" hintText = "Enter your Password" floatingLabelText = "Password" onChange =
              {(event, newValue) => this.setState({password:newValue})}/>
            <br/>
            <RaisedButton label = "Submit" primary = {true} style = {style} onClick = {(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
