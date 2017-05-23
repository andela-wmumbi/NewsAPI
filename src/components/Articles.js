import React, { Component } from 'react';
import request from 'superagent';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.getSourceArticles = this.getSourceArticles.bind(this);
  }

  componentDidMount() {
    this.getSourceArticles(this.props.params.source_id);
  }
  componentWillReceiveProps(nextProps) {
    this.getSourceArticles(nextProps.params.source_id);
  }

  getSourceArticles(sourceId) {
    const id = sourceId;
    const apikey = '213327409d384371851777e7c7f78dfe';
    const source = 'https://newsapi.org/v1/articles?';
    const url = `${source}source=${id}&apiKey=${apikey}`;
    request
      .get(url)
      .then((res) => {
        this.setState({ articles: res.body.articles });
      });
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article) => (
          <div className="thecard">
            <div className="card-img">
              <img src={article.urlToImage} />
            </div>
            <div className="card-caption">
              <span className="date">Thursday, July 16, 2015</span>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
            <div className="card-outmore">
              <a target="_blank" href={article.url}>Read more</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;
