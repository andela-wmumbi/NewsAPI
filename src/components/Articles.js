import React, { PropTypes } from 'react';
import request from 'superagent';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      url: 'https://newsapi.org/v1/articles?'
    };
    this.getAllArticles = this.getAllArticles.bind(this);
    this.getTopArticles = this.getAllArticles.bind(this);
    this.getLatestArticles = this.getAllArticles.bind(this);
    this.getPopularArticles = this.getAllArticles.bind(this);
  }

  /**
   * receives ids of sources as props
   * used to consume an articles api
   */
  componentDidMount() {
    this.getAllArticles(this.props.params.source_id, this.state.url, this.props.params.sortBy);
  }

  componentWillReceiveProps(nextProps) {
    this.getAllArticles(nextProps.params.source_id, this.state.url, this.props.params.sortBy);
  }

  getAllArticles(sourceId, url, sortBy) {
    const id = sourceId;
    const apikey = '213327409d384371851777e7c7f78dfe';
    const endpoint = `${url}source=${id}&sortBy=${sortBy}&apiKey=${apikey}`;
    request
      .get(endpoint)
      .then((response) => {
        this.setState({ articles: response.body.articles });
      });
  }

  getTopArticles(sourceId, url) {
    const id = sourceId;
    const apikey = '213327409d384371851777e7c7f78dfe';
    const endpoint = `${url}source=${id}&sortBy=top&apiKey=${apikey}`;
    request
      .get(endpoint)
      .then((response) => {
        this.setState({ articles: response.body.articles });
      });
  }

  getLatestArticles(sourceId, url) {
    const id = sourceId;
    const apikey = '213327409d384371851777e7c7f78dfe';
    const endpoint = `${url}source=${id}&sortBy=latest&apiKey=${apikey}`;
    request
      .get(endpoint)
      .then((response) => {
        this.setState({ articles: response.body.articles });
      });
  }

  getPopularArticles(sourceId, url) {
    const id = sourceId;
    const apikey = '213327409d384371851777e7c7f78dfe';
    const endpoint = `${url}source=${id}&sortBy=popular&apiKey=${apikey}`;
    request
      .get(endpoint)
      .then((response) => {
        this.setState({ articles: response.body.articles });
      });
  }

  // renders articles of clicked source
  render() {
    const articles = this.state.articles;
    return (
      <div className="content">
        {this.props.params.sortBy === 'top' && <h3>Top Stories</h3>}
        {this.props.params.sortBy === 'popular' && <h3>Popular Stories</h3>}
        {this.props.params.sortBy === 'latest' && <h3>Latest Stories</h3>}
        {articles.map(article => (
          <div className="thecard" >
            <div className="card-img">
              <img alt="article" src={article.urlToImage} />
            </div>
            <div className="card-caption">
              <span className="date" />
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
            <div className="card-outmore">
              <a target="_blank" rel="noopener noreferrer" href={article.url}>Read more</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
Articles.propTypes = {
  params: PropTypes.object.isRequired
};

export default Articles;
