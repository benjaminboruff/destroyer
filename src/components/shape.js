import React from 'react';
import './shape.css';

function Shape(props) {
  
  const styles = {
    backgroundColor:props.color,
     width: props.size,
    height: props.size,
    borderRadius: props.radius,
    top: props.x,
    left: props.y,
  };

  return (
    <div className="shape" style={styles}></div>
  );
}

export default Shape;
