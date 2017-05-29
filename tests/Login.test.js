import React from 'react';
import { shallow } from 'enzyme';
import Login from './../src/components/Login';

describe('Footer', () => {
  let wrapper;
  it('renders login div', () => {
    wrapper = shallow(<Login />);
    const login = wrapper.find('#login');
    expect((login).length).toBe(1);
  });
});
