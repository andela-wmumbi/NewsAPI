import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import ApiCalls from './../src/components/Api';

describe('whether the buttons render', () => {
   let wrapper;
  it('should render nav buttons', () => {
    wrapper = mount(<ApiCalls />);
    expect(wrapper.find('.dropbtn')).toExist(true);
  });

  it('should render homepage', () => {
    wrapper = shallow(<ApiCalls />);
    expect(wrapper.find('.navbar').length).toBe(1);
  });
});
