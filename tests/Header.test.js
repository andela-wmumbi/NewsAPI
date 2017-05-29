import React from 'react';
import { shallow } from 'enzyme';
import Header from './../src/components/Header';

describe('Header', () => {
  let wrapper;
  it('renders header div', () => {
    wrapper = shallow(<Header />);
    const header = wrapper.find('div');
    expect((header).length).toBe(1);
  });
});
