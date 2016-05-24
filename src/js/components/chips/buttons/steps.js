import React from 'react';
import { Button } from './buttons.js';
import './steps.css';

const Step = (props) => (
  <div id={props.id} className="step">
    {props.children}
  </div>
);

Step.propTypes = {
  id: React.PropTypes.string,
  children: React.PropTypes.node,
};

class Stepper extends React.Component {

  renderDots = () => {
    return this.props.steps.map((item) => {
      const selectedClass = item === 3 ? 'selected' : '';
      return (<div className={`dot ${selectedClass}`} />);
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

export { Step, Stepper };
