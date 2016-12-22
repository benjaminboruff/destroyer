// @flow
import React from 'react';
import './header.css';

function Header(props: Object) {
  return (
    <div className="App-header">
      <h2>Destroy All Shapes!</h2>
      <h3>Time: {props.time}</h3>
    </div>
  );
}
export default Header;
