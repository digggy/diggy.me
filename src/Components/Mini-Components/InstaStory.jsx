import React, { Component } from "react";
class InstaStory extends Component {
  render() {
    let path = "images/resume/" + this.props.src;
    return (
      <div className="circle">
        <div className="img-backcover">{<img src={path} alt="" />}</div>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ "enable-background": "new -580 439 577.9 194;" }}
        >
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
    );
  }
}

export default InstaStory;
