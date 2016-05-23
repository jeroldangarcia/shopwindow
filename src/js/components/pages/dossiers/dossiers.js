import React from 'react';
import { Page } from '../../layout/page/page';
import { Inbox, InboxList, InboxViewer } from '../../layout/inbox/inbox';
import { List, ListItem } from '../../layout/list/list';
import { Field } from '../../chips/fields/fields';
import { Button, FAB } from '../../chips/buttons/buttons';

import { Dossier } from './dossier';

class Dossiers extends React.Component {

  static propTypes = {
    toggleDrawer: React.PropTypes.func,
  }

  defaultProps = {
    dossiers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    dossier: null,
    filter: '',
  };

  state = {
    dossiers: this.defaultProps.dossiers,
    dossier: this.defaultProps.dossier,
    filter: this.defaultProps.filter,
  };

  handleSelected = (id) => {
    this.setState({ dossier: id });
  }

  handleFilterChanged = (value) => {
    this.setState({ filter: value });
  }

  handleDossierClosed = () => {
    this.setState({ dossier: null });
  }

  handleClearFilter = () => {
    this.setState({ filter: '' });
  }

  renderListItem = (item) => {
    const selected = this.state.dossier === null ? '' : this.state.dossier === item ? 'selected' : '';
    return (<ListItem
      id={item}
      icon="folder_open"
      title="Primavera 75 Aniv"
      subtitle="3er cambio"
      info="18/04/2016"
      selected={selected}
      onSelected={this.handleSelected}
    />);
  }

  render() {
    return (
      <Page title="DOSSIERS" icon="content_copy" toggleDrawer={this.props.toggleDrawer}>
        <Inbox>
          <InboxList open={this.state.dossier == null}>
            <div className="filter flex expand">
              <Field label="Filter by Center ..." value={this.state.filter} onChange={this.handleFilterChanged} />
              <Button icon="close" onMouseUp={this.handleClearFilter}/>
            </div>
            <List selected={this.state.dossier}>
              {this.state.dossiers.map(this.renderListItem)}
            </List>
            <FAB icon="add" to="/new" />
          </InboxList>
          <InboxViewer open={this.state.dossier != null}>
            <Dossier id="this.state.dossier" done={this.handleDossierClosed} />
          </InboxViewer>
        </Inbox>
      </Page>
    );
  }
}

export default Dossiers;
