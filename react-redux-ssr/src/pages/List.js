import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { List, Avatar } from 'antd';

import { getList } from '../stores/actions';

@connect(
  state => ({
    list: state.list
  }),
  { getList }
)
export default class extends Component {
  static asyncData(store) {
    return store.dispatch(getList());
  }

  componentWillMount() {
    if(!this.props.list.datalist.length) {
      this.props.getList();
    }
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
                  avatar={<Avatar src={item.author.avatar_url} />}
                  title={<Link to={`/detail/${item.id}`}>{item.title}</Link>}
                />
              </List.Item>
            )
          }
        />
      </div>
    )
  }
}