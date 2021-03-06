import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { List, Avatar } from 'antd';

import { getDetail } from '../stores/actions';

@connect(
  state => ({
    detail: state.detail
  }),
  { getDetail }
)
export default class extends Component {

  componentWillMount() {
    let { params } = this.props.match;
    this.props.getDetail({ id: params.id });
  }

  render() {
    let { detail } = this.props;
    let { detailData } = detail;

    return (
      <div>
        <h2>{detailData.title}</h2>
        <p>{detailData.body}</p>
      </div>
    )
  }
}