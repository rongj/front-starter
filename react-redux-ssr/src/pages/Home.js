import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import '../styles/home.scss';

import { Button, Input, Table } from 'antd';
import { increase, decrease, getUsers } from '../stores/actions';

@connect(
  state => ({ 
    home: state.home
  }),
  dispatch => ({
    handleIncrease: () => dispatch(increase()),
    handleDecrease: () => dispatch(decrease()),
    handleGetUsers: () => dispatch(getUsers())
  })
)
export default class Home extends Component {
  static asyncData(store) {
    return store.dispatch(getUsers());
  }

  componentWillMount() {
    if(!this.props.home.userlist.length) {
      this.props.handleGetUsers();
    }
  }

  render() {
    let { home, handleIncrease, handleDecrease } = this.props;
    let { count, userlist } = home;

    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'username',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text, record) => record.address.city + ',' + record.address.street
      },
      {
        title: 'phone',
        key: 'phone',
        dataIndex: 'phone',
      },
      {
        title: 'email',
        key: 'email',
        dataIndex: 'email',
      },
      {
        title: 'company',
        key: 'company',
        dataIndex: 'company',
        render: (text, record) => record.company.name
      },
    ];

    return (
      <div>
        <Helmet>
          <title>首页</title>
          <meta name="keywords" content="HTML,ASP,PHP,SQL" />
        </Helmet>
        <Button onClick={handleDecrease}>-</Button>
        <Input className="home-input" value={count} readOnly />
        <Button onClick={handleIncrease}>+</Button>
        <br/>
        <Table 
          rowKey={record => record.id}
          columns={columns}
          dataSource={userlist}
        />
      </div>
    )
  }
}