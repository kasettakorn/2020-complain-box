import React, { Component } from "react";

export default class PostIt extends Component {
  render() {
    return (
      <div>
        <a href="#">
          <h2>📌 {this.props.uploadName}</h2>
          <p>{this.props.note}</p>
        </a>
      </div>
    );
  }
}
