import React from 'react';
import '../../css/main.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('this is:', this);
  }
  render() {
    return (
      <div className="nav">
        <button id="btn"> onClick={this.handleClick}Sign in</button>
      </div >
    );
  }
}
