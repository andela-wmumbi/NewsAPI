import React from 'react';
import { shallow, mount } from 'enzyme';
import NavBar from './../src/components/NavBar';

const props = {
  sources: {}
};
describe('NavBar component', () => {
  let wrapper;
  it('renders navbar', () => {
    wrapper = shallow(<NavBar {...props} />);
    const divContent = wrapper.find('div');
    expect((divContent).length).toEqual(3);
  });
});
