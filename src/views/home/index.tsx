import { Breadcrumb, Icon, Layout, Menu } from 'antd';
const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;

import * as React from 'react';

class Home extends React.Component {

  public onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };
  
  public render() {
    return (
      <div className="box">
        <Header style={{ background: '#fff', padding: 0, height: 58 }}>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" className="title" />
          <span className="user">
            <img src="" alt="" />
            yu
                </span>
        </Header>
        <Layout style={{ minHeight: '91vh' }}>
          <Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item></Breadcrumb.Item>
                <Breadcrumb.Item></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 500 }}>Bill is a cat.</div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }

}
export default Home
