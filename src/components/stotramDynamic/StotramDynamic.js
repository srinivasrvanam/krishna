import React, { Component } from "react";
import { slokas } from "../../data/4_sahasra";
import EachNama from "../eachNama/EachNama";

export class StotramDynamic extends Component {
  render() {
    return (
      <div>
        {slokas.map((sloka) => (
          <EachNama sloka={sloka} />
        ))}
      </div>
    );
  }
}

export default StotramDynamic;
