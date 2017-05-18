import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/menu.js';
import ContentLister from './components/content.js';
import ApiCalls from './components/Api.js';
import SearchBar from './components/search.js';
import routes from './route';
import { Router, browserHistory } from 'react-router';

/*class Main extends Component {
    render() {
        return (<div>
            <ApiCalls />
        </div>
        );
    }
}*/
ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
