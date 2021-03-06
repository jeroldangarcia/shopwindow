import React from 'react';
import { Icon, Button } from '../../chips/buttons/buttons';
import './list.css';

const ListItemLine = ({text, info}) => {
  return (
    <div className="subtitle">
      <span className="flex expand">{text}</span>
      <span>{info}</span>
    </div>
  );
};

const ListItem = ({ id, title, subtitle, info, icon, children, selected, onSelected }) => {

  const handleSelected = () => {
    onSelected(id);
  };

  return (
    <li className={`listitem ${selected}`} onClick={handleSelected} >
      <Icon icon={icon} />
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">
          <span className="flex expand">{subtitle}</span>
          <span>{info}</span></div>
        <div className="content">{children}</div>
      </div>
    </li>
  );
};


const List = (props) => {
  return (
    <div className="list">
      <ul>{props.children}</ul>
    </div>
  );
};

export { List, ListItem, ListItemLine };
