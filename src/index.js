import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/menu.js';
import ContentLister from './components/content.js';
import ApiCalls from './components/Api.js';
import SearchBar from './components/search.js';

class Main extends React.Component {
    render() {
        return (<div>
            <NavBar />
            <SearchBar />
            <ContentLister />
        </div>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById('app'));
