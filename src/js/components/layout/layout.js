import React from 'react';
import './layout.css';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { drawer: false, dialog: false };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleDrawer(forced) {
    const drawerState = forced != null ? forced : !this.state.drawer;
    this.setState({ drawer: drawerState });
  }

  toggleDialog() {
    this.setState({ dialog: !this.state.dialog });
  }

  toggleOverlay() {
    if (this.state.dialog) this.toggleDialog();
    if (this.state.drawer) this.toggleDrawer();
  }

  render() {
    const overlayClass = this.state.drawer || this.state.dialog ? '' : 'hidden';
    const drawerClass = this.state.drawer ? 'uncoverleft' : '';
    const dialogClass = this.state.dialog ? '' : 'hidden';
    return (
      <div className="layout">
        <div className={`overlay ${overlayClass} centred`} onClick={this.toggleOverlay}>
          <div className={`dialog ${dialogClass}`}></div>
        </div>
        <div className={`drawer ${drawerClass}`}></div>
        <div className="container">
          <div id="searchbar" onClick={this.toggleDialog}></div>
          {React.cloneElement(
            this.props.children, { toggleDrawer: this.toggleDrawer }
          )}
        </div>
        <div className="toolbar"></div>
      </div>
    );
  }
}

export default Layout;
