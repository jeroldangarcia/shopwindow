import React from 'react';
import { FAB } from '../../chips/buttons/buttons';
import './inbox.css';

class InboxList extends React.Component {

  handleAddItem() {
    // TODO
  }

  render() {
    return (
      <div className="inbox-list">
        {this.props.children}
        <FAB icon="add" to="" onMouseLeave={this.handleAddItem()} />
      </div>
    );
  };
}

class InboxViewer extends React.Component {
  render() {
    return (
      <div className="inbox-viewer">
        {this.props.children}
      </div>
    );
  }
}


class Inbox extends React.Component {
  render() {
    return (
      <div className="inbox">
        {this.props.children}
      </div>
    );
  }
}

export { Inbox, InboxList, InboxViewer};
