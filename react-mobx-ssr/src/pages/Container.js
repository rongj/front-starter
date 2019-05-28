import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Layout, Menu, Icon, Dropdown } from 'antd';
import { singleLayout } from '../configs/layout';

import '../styles/layout.scss';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

@withRouter
@inject('appStore')
@observer
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.props.appStore.history = this.props.history;
  }

  toggle = () => this.props.appStore.toggle()

  logout = () => {
    let { history, location, appStore } = this.props;
    history.push({ pathname: '/login', search: 'redirect=' + location.pathname })
    appStore.logout()
  }

  handleMenu = ({ key }) => {
    this.props.history.push(key)
  }

  render() {
    let { children, location, appStore } = this.props;
    let { collapsed, user } = appStore;

    // 单独视图
    if (singleLayout && singleLayout.indexOf(location.pathname) > -1) {
      return <div>{children}</div>
    }

    return (
      <Layout className="main-wrapper">
        <Sider className="main-sider" collapsed={collapsed}
collapsible trigger={null}>
          <div className="sider-logo" />
          <div className="main-menu scrollbar-primary">
            <Menu
              defaultOpenKeys={['sub1']}
              defaultSelectedKeys={[location.pathname]}
              mode="inline"
              onClick={this.handleMenu}
              theme="dark">
              <Menu.Item key="/">
                <Icon type="pie-chart" />
                <span>index</span>
              </Menu.Item>
              <Menu.Item key="/detail">
                <Icon type="desktop" />
                <span>detail</span>
              </Menu.Item>
              <Menu.Item key="/4">
                <Icon type="inbox" />
                <span>Option 4</span>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="/5">Option 5</Menu.Item>
                <Menu.Item key="/6">Option 6</Menu.Item>
                <Menu.Item key="/7">Option 7</Menu.Item>
                <Menu.Item key="/8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="/9">Option 9</Menu.Item>
                <Menu.Item key="/10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="/11">Option 11</Menu.Item>
                  <Menu.Item key="/12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
        </Sider>
        <Layout className="main-layout">
          <Header className="main-header clearfix">
            <div className="main-header-left">
              <Icon
                className="header-trigger"
                onClick={this.toggle}
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                />
            </div>
            <div className="main-header-right">
              <Dropdown overlay={
                <Menu>
                  <Menu.Item onClick={this.logout}>退出</Menu.Item>
                </Menu>
              }>
                <a className="login-user"><Icon type="user" />{user.username}</a>
              </Dropdown>
            </div>
          </Header>
          <Content className="main-content scrollbar">
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}