import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/menu.js';
import ContentLister from './components/content.js';
import ApiCalls from './components/Api.js';
import SearchBar from './components/search.js';

class Main extends Component {
    render() {
        return (<div>
            <NavBar />
            <SearchBar />
            <ApiCalls />
        </div>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById('app'));
