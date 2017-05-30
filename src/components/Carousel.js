import React from 'react';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { React_Bootstrap_Carousel } from 'react-bootstrap-carousel';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onSelect(active, direction) {
    console.log(`active=${active} && direction=${direction}`);
  }
  render() {
    return (
      <div style={{ height: 300, margin: 20 }}>
        <React_Bootstrap_Carousel
          animation
          onSelect={this.onSelect}
          className="carousel-fade"
        >
          <div style={{ height: 300, width: '100%', backgroundColor: 'skyblue' }}>
            123
            </div>
          <div style={{ height: 300, width: '100%', backgroundColor: 'aqua' }}>
            456
            </div>
          <div style={{ height: 300, width: '100%', backgroundColor: 'lightpink' }}>
            789
            </div>
        </React_Bootstrap_Carousel>
      </div>
    );
  }
}
export default Carousel;
