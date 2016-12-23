import React from 'react';
import { shallow } from 'enzyme';
import Shape from '../shape';

describe('<Shape />', () => {
  const clickHandler = jest.fn(); // mock function

  it('renders without error', () => {
    shallow(<Shape />);
  });

  it('has only one child that is a div', () => {
    const wrapper = shallow(<Shape />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have div child with props with correct values', () => {
    const wrapper = shallow(<Shape
                              fade="shape transition in"
                              color="rgb(255,255,255)"
                              size="100px"
                              radius="50%"
                              x="30%"
                              y="45%"
                              display="block"
                              onClick={clickHandler} />);

    expect(wrapper.props().className).toEqual('shape transition in');
    expect(wrapper.props().style.backgroundColor).toEqual('rgb(255,255,255)');
    expect(wrapper.props().style.width).toEqual('100px');
    expect(wrapper.props().style.height).toEqual('100px');
    expect(wrapper.props().style.borderRadius).toEqual('50%');
    expect(wrapper.props().style.left).toEqual('30%');
    expect(wrapper.props().style.top).toEqual('45%');
    expect(wrapper.props().style.display).toEqual('block');
    expect(wrapper.props().style.cursor).toEqual('pointer');
    expect(wrapper.props().style.position).toEqual('absolute');
    expect(wrapper.props().onClick).toEqual(clickHandler);
  });

  it('simulates click events', () => {
    const wrapper = shallow(<Shape onClick={clickHandler} />);
    wrapper.find('div').simulate('click');
    expect(clickHandler.mock.calls.length).toBe(1);
  });

});
