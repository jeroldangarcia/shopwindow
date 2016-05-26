import React from 'react';
import { Icon, Button } from '../../chips/buttons/buttons';
import { browserHistory } from 'react-router';
import './header.css';

const Header = (props) => {
  const goBack = () => { browserHistory.push(props.to); };
  const goSearch = () => { browserHistory.push('search'); };
  const logout = () => { delete localStorage.token; };
  const print = () => { browserHistory.push('print'); };

  const searchButton = <Button id="search-button" icon="search" onClick={goSearch} />;
  const icon = props.to ? '' : <Icon id="header-icon" icon={props.icon} />;
  const drawerButton = props.to ? '' : <Button id="drawer-button" icon="menu" onMouseUp={props.toggleDrawer} />;
  const backButton = props.to ? <Button id="back-button" icon="arrow_back" onMouseUp={goBack} /> : "";
  const logoutButton = <Button id="logout-button" icon="exit_to_app" onMouseUp={logout} />
  const printButton = <Button id="print-button" icon="print" onMouseUp={print} />

  return (
    <header className="header">{drawerButton} {backButton} {icon} <span className="title">{props.title}</span>{searchButton}{printButton}{logoutButton}</header>
  );
};

export default Header;
