import React from 'react';
import { Button } from './buttons.js';
import './steps.css';

class Stepper extends React.Component {

  renderDots = () => {
    const dots = [1,2,3,4,5];
    return dots.map((item) => {
      const selectedClass = item === 3 ? 'selected' : '';
      return (<div className={`dot ${selectedClass}`} />)
    });
  }

  render() {
    return (
      <div className="stepper">
        <Button icon="arrow_left" label="BACK" />
        <div className="flex">{this.renderDots()}</div>
        <Button icon="arrow_right" label="NEXT" />
      </div>
    );
  }
}

export default Stepper;
