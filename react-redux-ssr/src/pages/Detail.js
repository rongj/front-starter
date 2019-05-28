import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { List, Avatar } from 'antd';

import { getDetail } from '../stores/actions';

import pathToRegexp from 'path-to-regexp';

@connect(
  state => ({
    detail: state.detail
  }),
  { getDetail }
)
export default class extends Component {
  static asyncData(store, path) {
    let id = pathToRegexp('/detail/:id').exec(path)[1];
    return store.dispatch(getDetail({ id }));
  }

  componentWillMount() {
    let { detailData } = this.props.detail;
    let { params } = this.props.match;
    if(!detailData.id || !detailData.id !== params.id) {
      this.props.getDetail({ id: params.id });
    }
  }

  render() {
    let { detail } = this.props;
    let { detailData } = detail;

    return (
      <div>
        <h2>{detailData.title}</h2>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: detailData.content }}></div>
      </div>
    )
  }
}