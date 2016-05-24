import React from 'react';
import { Button } from '../buttons/buttons';
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

  defaultProps = {
    step: 1,
  }

  state = {
    step : this.defaultProps.step,
  }

  handleBack = () => {
    this.props.onStepChanged(this.state.step - 1);
    this.setState({ step: this.state.step - 1});
  }

  handleNext = () => {
    this.props.onStepChanged(this.state.step + 1);
    this.setState({ step: this.state.step + 1});
  }

  renderDots = () => {
    return this.props.steps.map((item) => {
      const selectedClass = item === 3 ? 'selected' : '';
      return (<div className={`dot ${selectedClass}`} />);
    });
  }

  render() {
    return (
      <div className="stepper">
        <Button icon="arrow_left" label="BACK" onMouseUp={this.handleBack}/>
        <div className="flex">{this.renderDots()}</div>
        <Button icon="arrow_right" label="NEXT" onMouseUp={this.handleNext}/>
      </div>
    );
  }
}

export { Step, Stepper };
