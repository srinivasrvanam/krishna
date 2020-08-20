import React, { Component } from "react";

export class EachNama extends Component {
  render() {
    return (
      <div>
        <table style={{ border: "2" }}>
          <tr>
            <td>{this.props.sloka.id}</td>
            <td>{this.props.sloka.line1tel}</td>
            <td>{this.props.sloka.line2tel}</td>
          </tr>
        </table>
        {/* <dl>
          <dt style={{ color: "red" }}>{this.props.sloka.id}</dt>
          <dd style={{ color: "blue" }}>{this.props.sloka.line1tel}</dd>
        </dl> */}
      </div>
    );
  }
}

export default EachNama;
