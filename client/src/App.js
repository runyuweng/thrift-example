import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      name:'',
      pwd:''
    }
  }

  handleSubmit = () =>{
    fetch('http://localhost:3001/verify')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    })
  }
  render() {
    const { name, pwd } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input type="text" value={ name } onChange={(e)=>{this.setState({name: e.target.value})}}/>
          <input type="password" value={ pwd } onChange={(e)=>{this.setState({pwd: e.target.value})}}/>
          <button onClick={this.handleSubmit}>submit</button>
        </p>
      </div>
    );
  }
}

export default App;
