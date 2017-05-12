import React from 'react';
import '../../css/main.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <button id="btn">Sign in</button>
                <button onCli><img src="/images/menu2.svg" /></button>
            </div>
        );
    }
}



