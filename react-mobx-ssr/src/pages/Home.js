import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import '../styles/home.scss';

import { Button, Input } from 'antd';

@inject('homeStore')
@observer
export default class Home extends Component {

  increment = () => this.props.homeStore.increment()

  decrement = () => this.props.homeStore.decrement()

  render() {
    let { homeStore } = this.props;
    let { count } = homeStore;

    return (
      <div>
        index page
        <br/>
        <Input
          className="home-input"
          value={count}
          readOnly />
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </div>
    )
  }
}