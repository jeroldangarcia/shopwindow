import React from 'react';


class Dialog extends React.Component {
  render() {
    return (
      <div className="dialog">
        <div className="dialog-header">
          title{this.props.title}
        </div>
        {this.props.children}
        <div className="dialog-buttons">
          buttons
        </div>
      </div>
    );
  }
}

export default Dialog;
