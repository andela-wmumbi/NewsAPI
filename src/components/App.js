import React, { PropTypes } from 'react';
import request from 'superagent';
import Footer from './Footer';
import NavBar from './NavBar';
import '../../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    };
    this.getSources = this.getSources.bind(this);
  }
  componentDidMount() {
    this.getSources(() => {
    });
  }

  /**
   * consumes newsapi to get sources of news using superagent
   * stores the sources in a state
   */

  getSources(callback) {
    const apikey = '213327409d384371851777e7c7f78dfe';
    const source = 'http://newsapi.org/v1/sources?apiKey=';
    const url = source + apikey;
    request
      .get(url)
      .then((response) => {
        callback(response.body.sources);
        this.setState({ sources: response.body.sources });
      });
  }

  render() {
    return (
      <div>
        <NavBar sources={this.state.sources} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.node
};

App.defaultProps = {
  children: null,
};
export default App;
