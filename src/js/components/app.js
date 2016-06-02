import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Layout from './layout/layout';
import './app.css';
import './palette-indigo.css';

// Pages
import Login from './pages/login/login';
import Dossiers from './pages/dossiers/dossiers';
import { NewDossier, PrintDossier } from './pages/dossiers/dossier';
import ShopWindow from './pages/dossiers/shopwindow';
import PhotoUpload from './pages/media/photoupload';

const auth = {

  login(email, pwd, callback) {
    if (email === 'jeroldan@gmail.com') {
      localStorage.token = Math.random().toString(36).substring(7);
      callback(true);
      this.onChange(true);
    } else {
      callback(false);
      this.onChange(false);
    }
  },

  loggedIn() {
    return !!localStorage.token;
  },

  logout() {
    delete localStorage.token;
    this.onChange(false);
  },

  onChange() {},
};

class LoginRequired extends React.Component {

  state = {
    loggedIn: auth.loggedIn(),
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
  }

  updateAuth = (logged) => {
    this.setState({ loggedIn: logged });
  }

  renderLayout = (children) => (
    <Layout>{children}</Layout>
  );

  render() {
    const children = React.cloneElement(
      this.props.children, { key: this.props.location.pathname }
    );
    return this.state.loggedIn ? <Layout>{children}</Layout> : <Login auth={auth} />;
  }
}

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LoginRequired}>
          <IndexRoute component={Dossiers} />
          <Route path="/new" component={NewDossier} />
          <Route path="/shopwindow" component={ShopWindow} />
          <Route path="/print" component={PrintDossier} />
          <Route path="/photos" component={PhotoUpload} />
          <Route path="/:id" component={Dossiers} />
        </Route>
      </Router>
    );
  }
}

export default App;
