import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import SearchBar from './../src/components/SearchBar';


describe('SearchBar', () => {
  let wrapper;
  it('calls handleSearch', () => {
    wrapper = mount(<SearchBar {...props} />);
    sinon.spy(SearchBar.prototype, 'handleSearch');
    expect(SearchBar.prototype.handleSearch.called).toEqual(true);
    SearchBar.prototype.handleSearch.restore();
  });
});
