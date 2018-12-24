import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { List, Avatar } from 'antd';

import { getDetail } from '../stores/actions/detail';

@connect(
  state => ({
    detail: state.detail
  }),
  dispatch => ({
    handleGetDetail: data => dispatch(getDetail(data)),
  })
)
export default class extends Component {

  componentWillMount() {
    let { params } = this.props.match;
    this.props.handleGetDetail({ id: params.id });
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