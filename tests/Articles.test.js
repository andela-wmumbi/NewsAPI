import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import Articles from './../src/components/Articles';

const props = {
  params: { sortBy: 'top', source_id: 'Bild' },
};
const mockArticles = {
  articles: [
    {
      author: null,
      title: 'Vater von Manchester-Opfer - Die Queen tröstete meine Tochter',
      description: "Es ist strahlender Sonnenschein, als David Robson (54) das Manchester Children's Hospital verlässt, über sein Gesicht haben die Sorgen der letzten Tage aber einen tiefen Schatten gelegt.Der *** BILDplus Inhalt ***",
      url: 'http://www.bild.de/bild-plus/news/ausland/terror-anschlag-manchester/ich-stand-neben-meiner-tochter-als-die-bombe-ihr-bein-zerfetzte-51931844,view=conversionToLogin.bild.html',
      urlToImage: 'http://bilder.bild.de/fotos/millie-und-ihr-vater-david-200397125-51931942/Bild/3,club=bildplus.bild.jpg',
      publishedAt: '2017-05-27T20:30:02+00:00'
    }],
};
describe('the Articles component', () => {
  let wrapper;
  it('wraps content under .content div', () => {
    wrapper = shallow(<Articles {...props} />);
    const divContent = wrapper.find('.content');
    expect((divContent).length).toBe(1);
  });

  it('checks that the componentDidMount function was called', () => {
    sinon.spy(Articles.prototype, 'componentDidMount');
    wrapper = mount(<Articles {...props} />);
    expect(Articles.prototype.componentDidMount.calledOnce).toEqual(true);
    Articles.prototype.componentDidMount.restore();
  });

  it('Should render articles', () => {
    wrapper = mount(
      <Articles {...props} />
    );
    wrapper.setState(mockArticles);
    wrapper.update();
    const article = wrapper.find('.content');
    expect(article.length).toBe(1);
  });
});



