import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header';

it('renders Header without error', () => {
  let div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
