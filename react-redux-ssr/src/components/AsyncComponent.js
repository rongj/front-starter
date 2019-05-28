import React, {Component} from 'react';
import { connect } from 'react-redux';

import { logout } from '../stores/actions';

@connect(state => ({ app: state.app }))
export const asyncComponent = (loadComponent, requireAuth) => (
  class extends Component {
    state = {
      Component: null,
    }

    componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }

      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({ Component });
          let { app, location, dispatch, history } = this.props;
          let uid = null;
          if(app.user) {
            uid = app.user.uid;
          }
          if(requireAuth && !uid) {
            history.push({ pathname: '/login' });
            dispatch(logout(location.pathname));
          }
        })
        .catch((err) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err;
        });

    }

    hasLoadedComponent() {
      return this.state.Component !== null;
    }

    render() {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
);