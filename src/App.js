
import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  componentDidMount() {
    const api = 'https://0vlxd0lfec.execute-api.ap-south-1.amazonaws.com/dev';
    const data = { 'name' : 'Devops Engineering' };
    axios
      .post(api, data)
      .then((response) => {
        alert('Calling API gateway - Status : '+response.status);
        alert('API gateway url : '+ response.config.url);
        alert('Input received at API : '+ response.config.data);
        alert('Calling Lambda : '+ response.data.body);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Simple React app
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;