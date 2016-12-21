import React from 'react';
import logo from '../logo.svg';

function Header(props) {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Destroy All Shapes!</h2>
      <h3>Score: {props.score}</h3>
    </div>
  );
}
export default Header;
