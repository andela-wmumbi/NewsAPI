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
  }

  /**
   * receives ids of sources as props
   * used to consume an articles api
   */
  componentDidMount() {
    let params;
    if (this.props.params.source_id) {
      params = this.props.params;
    } else {
      params = { source_id: 'the-guardian-au', sortBy: 'top' };
    }
    this.getAllArticles(params.source_id, this.state.url, params.sortBy);
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
  // renders articles of clicked source
  render() {
    const articles = this.state.articles;

    return (
      <div className="content">
        {this.props.params.sortBy === 'top' && <h4>Top Stories</h4>}
        {this.props.params.sortBy === 'popular' && <h4>Popular Stories</h4>}
        {this.props.params.sortBy === 'latest' && <h4>Latest Stories</h4>}
        {/* <button onClick={this.getTopArticles()}>Top</button>*/}
        {articles.map(article => (
          <div className="thecard" key={article.title}>
            <div className="card-img">
              <img alt="article" src={article.urlToImage} />
            </div>
            <div className="card-caption">
              <span className="date" />
              <h4>{article.title}</h4>
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
