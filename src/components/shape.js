import React from 'react';
import './shape.css';

function Shape(props) {

  const styles = {
    backgroundColor:props.color,
     width: props.size,
    height: props.size,
    borderRadius: props.radius,
    left: props.x,
    top: props.y,
    display: props.display,
    cursor: 'pointer'
  };

  return (
    <div className="shape" style={styles} onClick={props.onClick} ></div>
  );
}

export default Shape;
