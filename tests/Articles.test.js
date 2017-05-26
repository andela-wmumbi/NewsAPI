import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Articles from './../src/components/Articles';

describe("the Articles component", () => {
  let wrapper;
  it("wraps content under .content div", () => {
    wrapper = shallow(<Articles />);
    const divContent = wrapper.find('.content');
    expect((divContent).length).toBe(1);
  });

  it("checks that the componentDidMount function was called", () => {
    sinon.spy(Articles.prototype, 'componentDidMount');
    wrapper = mount(<Articles />);
    expect(Articles.prototype.componentDidMount.calledOnce).toEqual(true);
    Articles.prototype.componentDidMount.restore();
  })
})
