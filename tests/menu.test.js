import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../src/components/menu.js';

describe('whether the button renders', () => {
    let wrapper;
    it('should render navbar', () => {
        wrapper = shallow(<Navbar />);
        expect(wrapper.find(".nav").length).toEqual(1);
    });

});
