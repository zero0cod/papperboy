import React, { Component } from "react";
import loading from "./loading.gif";
let size = { width: "500px", height: "500px" };
export default class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img style={size} src={loading} alt="loading...." />
      </div>
    );
  }
}
