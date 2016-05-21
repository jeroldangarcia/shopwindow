import React from 'react';
import { Page } from '../../layout/page/page';
import { Inbox, InboxList, InboxViewer } from '../../layout/inbox/inbox';
import { List, ListItem } from '../../layout/list/list';
import Dossier from './dossier';

class Dossiers extends React.Component {

  static propTypes = {
    toggleDrawer: React.PropTypes.func,
  }

  defaultProps = {
    dossiers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  };

  state = {
    dossiers: this.defaultProps.dossiers,
  };

  renderListItem(item) {
    return (<ListItem icon='folder_open' title="Primavera 75 Aniv" subtitle="3er cambio" info="18/04/2016" />);
  }

  render() {
    return (
      <Page title="DOSSIERS" icon="content_copy" toggleDrawer={this.props.toggleDrawer}>
        <Inbox>
          <InboxList>
            <List>{this.state.dossiers.map(this.renderListItem)}</List>
          </InboxList>
          <InboxViewer>
            <Dossier />
          </InboxViewer>
        </Inbox>
      </Page>
    );
  }
}

export default Dossiers;
