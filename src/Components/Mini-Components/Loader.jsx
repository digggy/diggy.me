import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div>
        <div className="loader">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base-loader">
            <span></span>
            <div className="face-loader"></div>
          </div>
        </div>
        {/* <h1>Redirecting</h1> */}
      </div>
    );
  }
}
