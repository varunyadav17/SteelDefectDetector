import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class FileUpload extends Component{
  constructor(props){
    super(props);
    this.state = {
      img:null,
      response:"",
      file: null,
      filename:null
    }
  }

  handleClick(event){
    const data = new FormData();
    data.append('file', this.state.img);
    data.append('filename', this.state.filename);

    this.setState({ isLoading: true });
    fetch('http://localhost:5000/prediction',{
      method: 'POST',
      //mode: "no-cors",
      body: data,
      dataType: 'json'
    }).then((response) => response.json())
      .then(r => {
        this.setState({
          response: "Prediction : " + r["category"]
        })
      })

      console.log(this.state.response);
      //response.json().then((body) => {
      //});
      //.then((responseJson) => {
          //console.log(responseJson);
          //this.setState({ imageURL: `http://localhost:5000/${body.file}` });
        //})
  }

  handleChange(event){
    try{

    this.setState({
      img: event.target.files[0],
      file: URL.createObjectURL(event.target.files[0]),
      //file: event.target.files[0],
      filename: event.target.files[0].name,
      response:""
    })
  }
  catch(error)
  {

  }
  }

  render(){
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="FileUpload"/>
              <br></br>
                <RaisedButton
                    containerElement='label'
                    label='Upload Scan'>
                      <input type="file" style = {{display:'none'}} onChange = {this.handleChange.bind(this)}/>
                      <img src = {this.state.file}/>
                </RaisedButton>
              <br/>
              <b>{this.state.response}</b>
              <br/>
              <RaisedButton label = "Classify" primary = {true} style = {style} onClick = {(event) => this.handleClick(event)}/>
              <br/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default FileUpload;
