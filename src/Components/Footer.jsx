import React, { Component } from "react";
import { runWaves } from "../js/waves.js";

class Footer extends Component {
  componentDidMount() {
    runWaves();
  }
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className} />
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
      <canvas id="ooze" width="1920" height="888" />
        <div className="row" id="front-content">
          <div className="social-container">
            <ul className="social-icons">{networks}</ul>

            <ul className="copyright">
              &copy; Copyright 2019 Digdarshan Kunwar | Design by{" "}
              <a title="Digdarshan Kunwar" href="">
                {" "}
                Digdarshan Kunwar
              </a>
            </ul>
          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
