import React from 'react';
import Header from './header';
import './page.css';

const Page = (props) => (
  <div className="page">
    <Header
      title={props.title}
      icon={props.icon}
      to={props.to}
      toggleDrawer={props.toggleDrawer}
    />
    <main>{props.children}</main>
  </div>
);

Page.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  to: React.PropTypes.string,
  toggleDrawer: React.PropTypes.func,
  children: React.PropTypes.node,
};

export { Page };
