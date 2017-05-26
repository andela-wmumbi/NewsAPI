import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Login from './login';
import SearchBar from './SearchBar';

let allSources = [];
// es6 destructuring syntax
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: {},
    };
    this.generateCategories = this.generateCategories.bind(this);
    this.populateCategories = this.populateCategories.bind(this);
    this.generateNames = this.generateNames.bind(this);
  }

  /**
 * generateCategories()iterates through sources to retrieve categories
 * @params retrieved sources
 */
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
        // console.log(link.name);
        if (categoryName === link.category) {
          names.push({ label: link.name, value: link.id, sortBy: link.sortBysAvailable });
        }
      });
    });
    // console.log('All sources', names);
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
        <div className="google-login"> <Login /></div>
        {namesOfButtons.map(categoryName => (
          <div className="dropdown">
            <button className="dropbtn">{categoryName}</button>
            <div className="dropdown-content">
              {this.generateNames(categoryName, values).map(mysource => <Link to={`/articles/${mysource.value}`}>{mysource.label}</Link>)
              }
            </div>
          </div>))}
        <SearchBar sources={allSources} names={namesOfButtons} />
        <div />
      </div>
    );
  }
}
NavBar.PropTypes = {
  sources: PropTypes.Object
};
export default NavBar;
