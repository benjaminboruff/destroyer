// @flow
import React from 'react';
import './shape.css';

function Shape(props: Object) {

  const styles = {
    backgroundColor:props.color,
    width: props.size,
    height: props.size,
    borderRadius: props.radius,
    left: props.x,
    top: props.y,
    display: props.display,
    cursor: 'pointer',
    position: 'absolute'
  };

  return (
    <div className={props.fade} style={styles} onClick={props.onClick} key="shape" ></div>
  );
}

export default Shape;
