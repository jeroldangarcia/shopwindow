import React from 'react';
import Image from '../../chips/images/images';
import './cards.css';

const Cards = (props) => <div className="cards">{props.children}</div>;

class Card extends React.Component {

  render() {
    return (
      <div className="card-box">
        <div className="card mui-panel">
          <Image src="images/escaparate1.jpg" />
          <div className="card-info">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export { Cards, Card };
