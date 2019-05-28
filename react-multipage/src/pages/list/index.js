import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.scss';

class App extends Component {
  render() {
    return(
      <div>list page!</div>
    )
  }
}

ReactDOM.render(
  <AppContainer><App/></AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
