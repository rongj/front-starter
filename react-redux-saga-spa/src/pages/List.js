import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { List, Avatar } from 'antd';

@connect(
  state => ({
    list: state.list
  }),
)
export default class extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'getList' });
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