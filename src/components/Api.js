import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import '../../css/main.css';

import NavBar from './NavBar';

class ApiCalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };
    this.getSourceIds = this.getSourceIds.bind(this);
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
    const source = 'https://newsapi.org/v1/sources?apiKey=';
    const url = source + apikey;
    request
      .get(url)
      .then(response => this.setState({ sources: response.body.sources }));
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
export default ApiCalls;
