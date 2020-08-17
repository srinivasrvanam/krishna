import React, { Component } from "react";

export class EachNama extends Component {
  render() {
    return (
      <div>
        <dl>
          <dt style={{ color: "red" }}>{this.props.nama.title}</dt>
          <dd style={{ color: "blue" }}>{this.props.nama.meaning}</dd>
        </dl>
      </div>
    );
  }
}

export default EachNama;
