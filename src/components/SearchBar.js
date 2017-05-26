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
    browserHistory.push(`/articles/${source.value}`);
  }

  render() {
    const values = this.props.sources;
    // const names = this.props.names;
    // const ids = this.generateIds(names, values);
    // console.log('names', values);

    return (
      <div>
        <Select
          name="form-field-name"
          value={this.props.currentSource}
          options={values}
          onChange={this.handleSearch}
          placeholder="Search a source"
        />
      </div>
    );
  }
}
SearchBar.propTypes = {
  values: PropTypes.Array
};

export default SearchBar;

