import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './../src/components/App';
import expect from 'expect';

describe('App component', () => {
  let wrapper;
  it('renders navbar', () => {
    wrapper = shallow(<App />);
    const divContent = wrapper.find('div');
    expect((divContent).length).toEqual(1);
  });
  it('Should get sources', () => {
    const getSources = new App().getSources;


    getSources((response) => {
      // console.log(response);
      expect(response).to.be.an('array');
    });
  });
});
