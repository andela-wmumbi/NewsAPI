import React, { PropTypes } from 'react';
import request from 'superagent';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'top',
      articles: [],
      sortByParams: [],
      url: 'https://newsapi.org/v1/articles?'
    };
    this.getAllArticles = this.getAllArticles.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      params = { source_id: 'mirror', sortBy: 'top' };
    }
    this.getAllArticles(params.source_id, this.state.url, params.sortBy);
  }

  componentWillReceiveProps(nextProps) {
    this.getAllArticles(nextProps.params.source_id, this.state.url, this.props.params.sortBy);
  }

  getAllArticles(sourceId, url, sortBy) {
    this.setState({ sortByParams: sortBy.split(',') });
    const id = sourceId;
    const apikey = '213327409d384371851777e7c7f78dfe';
    const endpoint = `${url}source=${id}&sortBy=${sortBy}&apiKey=${apikey}`;
    request
      .get(endpoint)
      .then((response) => {
        this.setState({ articles: response.body.articles });
      });
  }
  handleChange(event) {
    let array = location.pathname.split('/');
    array = array.slice(0, array.length - 1);
    this.setState({ filter: event.target.value });
    window.history.pushState(this.state, '', [...array, event.target.value].join('/'));
    window.location.reload(true);
  }
  // renders articles of clicked source
  render() {
    const articles = this.state.articles;

    return (
      <div className="content">
        <div><select value={this.state.value} onChange={this.handleChange}>
          <option value="All">All</option>
          {this.state.sortByParams.map(sort => (
            <option value={sort}>{sort}</option>
          ))}
        </select>
        </div>
        {this.props.params.sortBy === 'top' && <h4>Top Stories</h4>}
        {this.props.params.sortBy === 'popular' && <h4>Popular Stories</h4>}
        {this.props.params.sortBy === 'latest' && <h4>Latest Stories</h4>}
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
