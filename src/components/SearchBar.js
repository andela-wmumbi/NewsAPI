import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import { browserHistory } from 'react-router';
import 'react-select/dist/react-select.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      sources: this.props.sources
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(source) {
    browserHistory.push(`/articles/${source.value}/${source.sortBy[0]}`);
  }

  render() {
    const values = this.props.sources;
    return (
      <div>
        <Select
          name="form-field-name"
          value={''}
          options={values}
          onChange={this.handleSearch}
          placeholder="Search a source"
        />
      </div>
    );
  }
}
SearchBar.propTypes = {
  sources: PropTypes.object.isRequired
};

export default SearchBar;
