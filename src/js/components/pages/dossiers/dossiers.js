import React from 'react';
import store from '../../../stores/dossiers';
import { browserHistory } from 'react-router';

import Filter from '../../chips/fields/filter';
import DatePicker from '../../chips/fields/datepicker';
import { Page } from '../../chips/page/page';
import { Paper } from '../../chips/papers/papers';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { Field, Select } from '../../chips/fields/fields';
import { List, ListItem } from '../../chips/list/list';
import { IconButton, Button, FAB } from '../../chips/buttons/buttons';
import { Inbox, InboxList, InboxViewer } from '../../layout/inbox/inbox';

import { Dossier } from './dossier';
import './dossiers.scss';

class Dossiers extends React.Component {

  defaultProps = {
    tab: store.filter.tab,
    filter: store.filter,
    dossiers: store.dossiers,
    dossier: store.dossier,
  };

  state = {
    tab: this.defaultProps.tab,
    filter: this.defaultProps.filter,
    dossiers: this.defaultProps.dossiers,
    dossier: this.defaultProps.dossier,
  };

  showViewer: false;

  componentWillMount() {
    this.showViewer = this.props.params.id ? true : false;
  }

  handleTabChanged = (nextTab) => {
    store.changeTab(nextTab, (nextStore) => {
      this.setState({ tab: nextTab, dossiers: nextStore.dossiers });
    });
  }

  handleFilterChanged = (nextFilter) => {
    store.changeFilter(nextFilter, (nextStore) => {
      this.setState({ filter: nextStore.filter, dossiers: nextStore.dossiers });
    });
  }

  handleDossierSelected = (dossier) => {
    store.selectDossier(dossier.id, (nextStore) => {
      browserHistory.push(`/dossiers/${dossier.id}`);
    });
  }

  handleDossierClosed = () => {
    store.unselectDossier(() => {
      browserHistory.push('/');
    });
  }

  handleClearFilter = () => {
    this.handleFilterValueChanged('');
  }

  handleToggleFilter = () => {
    store.changeFilter({ hidden: !this.state.filter.hidden }, (nextStore) => {
      this.setState({ filter: nextStore.filter });
    });
  }

  renderDossierItem = (dossier) => {
    const selected = '';
    return (
      <ListItem
        key={dossier.id}
        id={dossier}
        icon="folder_open"
        title={dossier.title}
        selected={selected}
        onSelected={this.handleDossierSelected}
      >
      <div className="line-info flex secondary-text-color">
        <span className="flex expand">
          <i className="material-icons small" style={{fontSize:'1.8rem', marginBottom:'2px'}}>location_city</i>
          <span style={{minWidth:'8rem',alignSelf:'flex-end', marginRight:'1rem'}}>{dossier.center}</span>
        </span>
        <span>{dossier.subtitle + ' - ' +dossier.date}</span>
      </div>
      </ListItem>
    );
  }

  renderFilter = () => {
    return this.state.filter.hidden ? '' : (<Filter filter={this.state.filter} onChange={this.handleFilterChanged}/>);
  }

  renderDossier = () => {
    return this.state.dossier ? (
      <Dossier id={this.state.dossier.id} done={this.handleDossierClosed} />
    ) : '';
  }

  render() {
    return (
      <Page title="DOSSIERS" icon="content_copy" toggleDrawer={this.props.toggleDrawer} toggleDialog={this.props.toggleDialog}>
        <Inbox>
          <InboxList open={!this.showViewer}>

            <Tabs onChanged={this.handleTabChanged} className="shadow-bottom">
              <Tab id="ESC" label="ESCAPARATES" active={this.state.tab === "ESC"}  />
              <Tab id="AMB" label="AMBIENTACION" active={this.state.tab === "AMB"} />
              <Tab id="PRO" label="PROMOCIONES" active={this.state.tab === "PRO"}  />
            </Tabs>

            {this.renderFilter()}
            <div className="filterButtonBar" style={{ maxHeight: '5rem', paddingRight: '1.6rem'}}>
              <IconButton icon="filter_list" className="filterButton half shadow-bottom" onMouseUp={this.handleToggleFilter}/>
            </div>

            <List selected={this.state.dossier}>
              {this.state.dossiers.map(this.renderDossierItem)}
            </List>
            <FAB icon="add" to="/new" />
          </InboxList>
          <InboxViewer open={this.showViewer}>
            {this.renderDossier()}
          </InboxViewer>
        </Inbox>
      </Page>
    );
  }
}

export default Dossiers;
