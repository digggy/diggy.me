import React, { Component } from "react";
import { runWaves } from "../js/waves.js";
import { connect } from "react-redux";

class Footer extends Component {
  componentDidMount() {
    runWaves("#ffffff");
  }
  componentDidUpdate() {
    if (this.props.darkMode === true) {
      runWaves("#131418");
    } else {
      runWaves("#ffffff");
    }
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
        <canvas id="my-wave" width="1920" height="888" />
        <div className="row" id="front-content">
          <div className="social-container">
            <ul className="social-icons">{networks}</ul>

            <ul className="copyright">Made with ❤️ by Digdarshan Kunwar</ul>
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
function mapStateToProps(state) {
  return {
    darkMode: state.setTheme.darktheme
  };
}
export default connect(
  mapStateToProps,
  null
)(Footer);
