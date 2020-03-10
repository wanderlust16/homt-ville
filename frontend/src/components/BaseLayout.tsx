import React from 'react';
import { Route, RouteProps } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import YogaList from './YogaList';
import YogaPage from './YogaPage';
import history from '../history';
import styled from 'styled-components';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    font-weight: 600;
    color: #1f3b51;
    // align-items: center;
    margin: 10px 0px 10px 0px; // 땜빵
    cursor: pointer;
`;

const useStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center', 
    padding: 0,
    backgroundColor: 'white',
    height: '80px'
  },
});

interface LayoutProps extends RouteProps {
  // component: React.ComponentType;
  component: () => any;
}

export default function BaseLayout() {

  const classes = useStyles();

  return (
    <Layout>
      <Header className={classes.headerContainer}>
        <Title onClick={() => history.push('/')}>HOMT-VILLE</Title>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"  
              title={
                <span>
                  {/* <UserOutlined /> */}
                  Yoga
                </span>
              }
            >
              <Menu.Item key="1">Videos</Menu.Item>
              <Menu.Item key="2">Community</Menu.Item>
              <Menu.Item key="3">Market</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  {/* <LaptopOutlined /> */}
                  Pilates
                </span>
              }
            >
              <Menu.Item key="5">Videos</Menu.Item>
              <Menu.Item key="6">Community</Menu.Item>
              <Menu.Item key="7">Market</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  {/* <NotificationOutlined /> */}
                  Weight
                </span>
              }
            >
              <Menu.Item key="9">Videos</Menu.Item>
              <Menu.Item key="10">Community</Menu.Item>
              <Menu.Item key="11">Market</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Main</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Route exact path="/" component={YogaList} />
            <Route path="/yoga/:branch" component={YogaPage} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

