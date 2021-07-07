import React, { Component } from "react";

export default class PostIt extends Component {
  render() {
    return (
      <div>
        <a href="#">
          <h2>{this.props.uploadName}</h2>
          <div className="content-tanabata" style={{border:"1px dashed black", lineHeight:"35px"}}>
            <p>{this.props.note}</p>
          </div>
          
        </a>
      </div>
    );
  }
}
