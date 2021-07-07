import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  FileFilled,
  SoundFilled,
} from "@ant-design/icons";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cheerup from "./components/Cheerup";
import PostItList from "./components/PostitList";
import Home from "./components/Home";

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
              <span role="img" aria-label="img" style={{fontSize:"30px"}} >📮 กล่องฝากด่า 2020</span>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, height:"100vh" }}
              >
                <PostItList />
              </div>
            </Content>
            <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                {" "}
                www.flaticon.com
              </a>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
