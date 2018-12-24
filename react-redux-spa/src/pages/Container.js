import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../stores/actions/app';

import { Layout, Menu, Icon, Dropdown } from 'antd';
import { singleLayout } from '../configs/layout';

import '../styles/layout.scss';

const { Header, Content } = Layout;

@withRouter
@connect(
  state => ({ 
    app: state.app
  })
)
export default class Container extends Component {

  logout = () => {
    let { history, location, dispatch } = this.props;
    history.push({ pathname: '/login', search: 'redirect='+location.pathname });
    dispatch(logout());
  }

  handleMenu = ({ key }) => {
    this.props.history.push(key);
  }

  render() {
    let { children, location, app } = this.props;
    let { user = {} } = app;

    // 单独视图
    if(singleLayout && singleLayout.indexOf(location.pathname) > -1) {
      return <div>{children}</div>
    }

    return (
      <Layout className="layout main-layout">
        <Header className="main-header">
          <div className="header-logo" />
          <div className="main-header-left">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[location.pathname]}
              onClick={this.handleMenu}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="/">index</Menu.Item>
              <Menu.Item key="/list">list</Menu.Item>
              <Menu.Item key="/about">about</Menu.Item>
            </Menu>
          </div>
          <div className="main-header-right">
            <Dropdown overlay={
                <Menu>
                  <Menu.Item onClick={this.logout}>退出</Menu.Item>
                </Menu>
              }>
              <a className="login-user"><Icon type="user" />{user && user.username}</a>
            </Dropdown>
          </div>
        </Header>
        <Content className="main-content scrollbar">
          {children}
        </Content>
      </Layout>
    )
  }
}
