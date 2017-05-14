import React from 'react';
import '../../css/main.css';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: {}
        };
    }
    render() {
        return (
            <div id="search">
                <button>Technology</button>
                <button>Sport</button>
                <button>General</button>
                <button>Business</button>
                <button>Politics</button>
            </div>
        );
    }





}
