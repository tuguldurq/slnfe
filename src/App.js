import React, { Component } from "react";
import { Layout, Menu } from "antd";

import Salons from "./Salons";
const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key={1}>Hello</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ minHeight: 380 }}>
          <Salons />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}

export default App;
