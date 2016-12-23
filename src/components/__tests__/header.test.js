import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';

it('renders Header without error', () => {
  shallow(<Header />);
});
