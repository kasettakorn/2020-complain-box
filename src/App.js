import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Cheerup from "./components/Cheerup";
import PostItList from "./components/PostitList";
// import Home from "./components/Home";

const { Header, Content, Footer, Sider } = Layout;

export default class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0, color: "white", fontSize: 18 }}
            >
              <span role="img" aria-label="img" style={{fontSize:"30px"}} >🏮 Tanabata 2021</span>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
         
              >
                <PostItList />
              </div>
            </Content>
   
          </Layout>
        </Layout>
      </Router>
    );
  }
}
