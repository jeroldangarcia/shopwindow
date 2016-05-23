import React from 'react';
import { Icon } from '../../chips/buttons/buttons';
import './list.css';

const ListItem = ({ id, title, subtitle, info, icon, children, selected, onSelected }) => {

  const handleSelected = () => {
    onSelected(id);
  };

  return (
    <li className={`listitem ${selected}`} onMouseUp={handleSelected}>
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

const ListDivider = () => <li className="mui-divider" />;

const List = (props) => {
  return (
    <div className="list">
      <ul>{props.children}</ul>
    </div>
  );
};

export { List, ListItem, ListDivider };
