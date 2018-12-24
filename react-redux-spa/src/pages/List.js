import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { List, Avatar } from 'antd';

import { getList } from '../stores/actions/list';

@connect(
  state => ({
    list: state.list
  }),
  dispatch => ({
    handleGetList: data => dispatch(getList(data)),
  })
)
export default class extends Component {

  componentWillMount() {
    this.props.handleGetList();
  }

  render() {
    let { list } = this.props;
    let { datalist } = list;
    
    return (
      <div>
        <List
          size="small"
          dataSource={datalist}
          renderItem={
            item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<Link to={`/detail/${item.id}`}>{item.title}</Link>}
                  description={item.body}
                />
              </List.Item>
            )
          }
        />
      </div>
    )
  }
}