import React from 'react';
import { shallow } from 'enzyme';
import Footer from './../src/components/Footer';

describe('Footer', () => {
    let wrapper;
    it('renders footer div', () => {
        wrapper = shallow(<Footer />);
        const footer = wrapper.find('.footer');
        expect((footer).length).toBe(1);
    });
});
