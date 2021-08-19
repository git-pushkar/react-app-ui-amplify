
import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  componentDidMount() {
    const api = 'https://0vlxd0lfec.execute-api.ap-south-1.amazonaws.com/dev';
    const data = { 'name' : 'Pushkar' };
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  render() {
    return (
      <div>Simple React App</div>
    );
  }
}
export default App;