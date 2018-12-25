import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/home.scss';

import { Button, Input, Table } from 'antd';

@connect(
  state => ({ 
    home: state.home
  }),
  dispatch => ({
    handleIncrease: () => dispatch({ type: 'increase' }),
    handleDecrease: () => dispatch({ type: 'decrease' }),
    handleGetUsers: () => dispatch({ type: 'getusers' }),
  })
)
export default class extends Component {
  componentDidMount() {
    this.props.handleGetUsers();
  }

  render() {
    let { home, handleIncrease, handleDecrease } = this.props;
    let { count, userlist } = home;

    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
      },
      {
        title: 'username',
        dataIndex: 'username',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        render: (text, record) => record.address.city + ',' + record.address.street
      },
      {
        title: 'phone',
        dataIndex: 'phone',
      },
      {
        title: 'email',
        dataIndex: 'email',
      },
      {
        title: 'company',
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
          rowKey={record => record.id}
          columns={columns}
          dataSource={userlist}
        />
      </div>
    )
  }
}