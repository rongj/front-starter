import React, { Component } from 'react';
import { connect } from 'react-redux';

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
export default class extends Component {
  componentWillMount() {
    this.props.handleGetUsers();
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
        <Button onClick={handleDecrease}>-</Button>
        <Input className="home-input" value={count} readOnly />
        <Button onClick={handleIncrease}>+</Button>
        <br/>
        <Table 
          columns={columns}
          dataSource={userlist}
        />
      </div>
    )
  }
}