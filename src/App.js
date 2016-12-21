import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Shape from './components/shape';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header score="48"/>
        <Shape color="blue" size="100px" radius="50%" x="100px" y="100px" />
      </div>
    );
  }
}

export default App;
