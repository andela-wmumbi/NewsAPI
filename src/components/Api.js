import React, { PropTypes } from 'react';
import request from 'superagent';
import '../../css/main.css';
import SearchBar from './SearchBar';
import NavBar from './NavBar';


class ApiCalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      currentSource: '',

    };
    this.getSourceIds = this.getSourceIds.bind(this);
    this.handleSource = this.handleSource.bind(this);
  }
  componentDidMount() {
    this.getSourceIds();
  }

  /**
   * consumes newsapi to get sources of news using superagent
   * stores the sources in a state
   */

  getSourceIds() {
    const apikey = '213327409d384371851777e7c7f78dfe';
    const source = 'http://newsapi.org/v1/sources?apiKey=';
    const url = source + apikey;
    request
      .get(url)
      .then(response => this.setState({ sources: response.body.sources }));
  }

  handleSource(event) {
    const hel = event.target.value;
    this.state.sour = hel;
  }

  render() {
    return (
      <div>
        <NavBar sources={this.state.sources} />

        {this.props.children}
      </div>
    );
  }
}
ApiCalls.propTypes = {
  children: PropTypes.node.isRequired
};
export default ApiCalls;
