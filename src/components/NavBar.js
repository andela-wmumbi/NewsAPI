import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SearchBar from './SearchBar';
import Login from './Login';
import Header from './Header';

let allSources = [];
// es6 destructuring syntax
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'top',
      sources: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateCategories = this.generateCategories.bind(this);
    this.populateCategories = this.populateCategories.bind(this);
    this.generateNames = this.generateNames.bind(this);
  }

  /**
 * generateCategories()iterates through sources to retrieve categories
 * @params retrieved sources
 */
  handleChange(event) {
    let array = location.pathname.split('/');
    array = array.slice(0, array.length - 1);
    this.setState({ filter: event.target.value });
    window.history.pushState(this.state, '', [...array, event.target.value].join('/'));
  }
  generateCategories(sources) {
    const reduced = {};
    for (let i = 0; i < sources.length; i++) {
      if (!reduced[sources[i].category]) {
        reduced[sources[i].category] = [];
      }
    }
    return reduced;
  }

  /**
   * populateCategories() returns an object with categories as keys and sources as the values
   * takes in sources retrieved
   */

  populateCategories(reduced, sources) {
    for (let i = 0; i < sources.length; i++) {
      if (sources.category === reduced[sources.category]) {
        const sourceCategory = sources[i].category;
        reduced[sourceCategory].push(sources[i]);
      }
    }
    return reduced;
  }

  /**
   * generateNames() returns names of sources
   * takes in sources retrieved
   */
  generateNames(categoryName, values) {
    const names = [];
    values.map((value) => {
      value.map((link) => {
        if (categoryName === link.category) {
          names.push(
            { label: link.name, value: link.id, sortBy: link.sortBysAvailable, id: link.id });
        }
      });
    });
    allSources = allSources.concat(names);
    return names;
  }

  /**
   * renders categories as buttons
   * renders sources to their respective categories
   */
  render() {
    allSources = [];
    const sources = this.props.sources;
    const categorised = this.generateCategories(sources);
    const formatted = this.populateCategories(categorised, sources);
    const namesOfButtons = Object.keys(formatted);
    const values = namesOfButtons.map(key => formatted[key]);
    return (
      <div className="navbar">
        {namesOfButtons.map(categoryName => (
          <div className="dropdown" key={categoryName}>
            <button className="dropbtn">{categoryName}</button>
            <div className="dropdown-content">
              {this.generateNames(categoryName, values).map(mysource =>
                <Link to={`/articles/${mysource.value}/${this.state.filter}`} key={mysource.id}>{mysource.label}</Link>)
              }
            </div>
          </div>))}
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="top">Top</option>
          <option value="popular" >Popular</option>
          <option value="latest">Latest</option>
        </select>
        <div className="search"><SearchBar sources={allSources} names={namesOfButtons} /></div>
        <Login />
        <div />
        <Header />
      </div >
    );
  }
}
NavBar.propTypes = {
  sources: PropTypes.array.isRequired
};
export default NavBar;
