import React from 'react';
import { Page } from '../../layout/page/page';
import { Inbox, InboxList, InboxViewer } from '../../layout/inbox/inbox';
import { List, ListItem } from '../../layout/list/list';
import { Field, Select } from '../../chips/fields/fields';
import { Button, FAB } from '../../chips/buttons/buttons';

import { Dossier } from './dossier';
import DossierStore from '../../../stores/dossiers';

class Dossiers extends React.Component {

  static propTypes = {
    toggleDrawer: React.PropTypes.func,
  }

  defaultProps = {
    dossiers: DossierStore.all(),
    dossier: null,
    filter: {
      criteria: 'center',
      value: '',
    },
  };

  state = {
    dossiers: this.defaultProps.dossiers,
    dossier: this.defaultProps.dossier,
    filter: this.defaultProps.filter,
  };

  options = [
    { label: 'Cent', value: 'CENTER' },
    { label: 'Prov', value: 'PROV' },
    { label: 'Date', value: 'DATE' },
  ]

  handleDossierSelected = (id) => {
    this.setState({ dossier: id });
  }

  filterDossiers = (criteria, value) => {
    return DossierStore.byFilter(criteria, value);
  }

  handleFilterValueChanged = (newValue) => {
    const result = this.filterDossiers(this.state.filter.criteria, newValue);
    this.setState({
      dossiers: result,
      filter: { criteria: this.state.filter.criteria, value: newValue },
    });
  }

  handleFilterCriteriaChanged = (newCriteria) => {
    const result = this.filterDossiers(newcriteria, this.state.filter.value);
    this.setState({
      dossiers: result,
      filter: { criteria: newCriteria, value: this.state.filter.value },
    });
  }

  handleDossierClosed = () => {
    this.setState({ dossier: null });
  }

  handleClearFilter = () => {
    this.handleFilterValueChanged('');
  }

  renderDossierItem = (dossier) => {

    /*const selected =
      this.state.dossier === null ?
        '' : this.state.dossier === dossier ?
          'selected' : '';*/
    const selected = '';

    return (
      <ListItem
        id={dossier}
        icon="folder_open"
        title={dossier.title}
        subtitle={dossier.subtitle}
        info={dossier.date}
        selected={selected}
        onSelected={this.handleDossierSelected}
      >
        <h4>{dossier.center}</h4>
      </ListItem>
    );
  }

  renderFilter = () => {
    return (
      <div className="filter flex">
        <Select options={this.options} onChange={this.handleFilterCriteriaChanged} />
        <Field label="Filter..." value={this.state.filter.value} onChange={this.handleFilterValueChanged} />
        <Button icon="close" onMouseUp={this.handleClearFilter} />
      </div>
    );
  }

  renderDossier = () => {
    return this.state.dossier === null ? '' : (
      <Dossier id={this.state.dossier.id} done={this.handleDossierClosed} />
    );
  }

  render() {
    return (
      <Page title="DOSSIERS" icon="content_copy" toggleDrawer={this.props.toggleDrawer}>
        <Inbox>
          <InboxList open={this.state.dossier == null}>
            {this.renderFilter()}
            <List selected={this.state.dossier}>
              {this.state.dossiers.map(this.renderDossierItem)}
            </List>
            <FAB icon="add" to="/new" />
          </InboxList>
          <InboxViewer open={this.state.dossier != null}>
            {this.renderDossier()}
          </InboxViewer>
        </Inbox>
      </Page>
    );
  }
}

export default Dossiers;
