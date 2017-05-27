import React, { PropTypes } from 'react';
import request from 'superagent';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Login from './login';
import '../../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],

    };
    this.getSources = this.getSources.bind(this);
  }
  componentDidMount() {
    this.getSources();
  }

  /**
   * consumes newsapi to get sources of news using superagent
   * stores the sources in a state
   */

  getSources() {
    const apikey = '213327409d384371851777e7c7f78dfe';
    const source = 'http://newsapi.org/v1/sources?apiKey=';
    const url = source + apikey;
    request
      .get(url)
      .then(response => this.setState({ sources: response.body.sources }));
  }

  render() {
    return (
      <div>
        <Header />
        <Login />
        <NavBar sources={this.state.sources} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.node.isRequired
};
export default App;
