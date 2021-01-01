import {
  LoadingOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Spin } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Modal from "antd/lib/modal/Modal";
import React, { Component } from "react";
import "../style/Postit.css";
import PostIt from "./PostIt";
import FirebaseService from "../services/firebaseServices";

export default class PostItList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      modalLoading: false,
      modalVisible: false,
      uploadName: "",
      success: false,
      note: "",
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onDataChange = this.onDataChange.bind(this);
  }

  handleSubmit = () => {
    FirebaseService.create({
      uploadName: this.state.uploadName,
      note: this.state.note,
    })
      .then(() => {
        this.setState({
          success: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    this.setState({
      modalLoading: true,
    });
    setTimeout(() => {
      this.setState({
        modalVisible: false,
        modalLoading: false,
      });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    FirebaseService.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    FirebaseService.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let snapshots = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      snapshots.push({
        key: key,
        uploadName: data.uploadName,
        note: data.note,
      });
    });

    this.setState({
      data: snapshots,
      success: true,
    });
  }

  render() {
    if (!this.state.success) {
      return (
        <Spin
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
          indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />}
        />
      );
    }

    return (
      <div id="postit-list">
        <Modal
          title="อยากด่าเรื่องอะไรตลอดปี 2020"
          visible={this.state.modalVisible}
          confirmLoading={this.state.modalLoading}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <label>ชื่อ</label>
          <Input
            prefix={<UserOutlined />}
            name="uploadName"
            onChange={this.handleChange}
          />
          <label>Note</label>
          <TextArea name="note" onChange={this.handleChange} />
        </Modal>

        <Button
          type="primary"
          size="large"
          style={{ border: "none" }}
          icon={<UploadOutlined />}
          loading={this.state.loading}
          onClick={() => this.setState({ modalVisible: true })}
        >
          สร้าง Post-it
        </Button>
        <ul className="post-it-ul">
          {this.state.data.map((data, index) => (
            <li key={index} className="post-it-li">
              <PostIt
                uploadName={data.uploadName}
                note={data.note}
                key={index}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
