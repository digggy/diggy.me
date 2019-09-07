import React from "react";
import { setThemeDark } from "../../redux/actions/index.js";
import { connect } from "react-redux";
import NightButton from "./NightButton";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      darkMode: {
        "--main-background-color": "var(--dark-mode)",
        "--card-background-color": "var(--dark-card)",
        "--default-fontcolor": "var(--normal-mode)",
        "--default-titles": "var(--normal-mode)",
        "--responsive-headline-color": "var(--normal-mode)",
        "--default-border-shadow": "var(--black-background-bodershadow)"
      },
      normalMode: {
        "--main-background-color": "var(--normal-mode)",
        "--card-background-color": "var(--normal-card)",
        "--default-fontcolor": "var(--dark-card)",
        "--default-titles": "var(--dark-card)",
        "--responsive-headline-color": "var(--dark-card)",
        "--default-border-shadow": "var(--white-background-bodershadow)"
      },
      className: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.props.setThemeDark(false);
  }
  
  componentWillMount(){
    this.handleChange();
  }

  handleChange() {
    const { checked, darkMode, normalMode } = this.state;
    if (!checked) {
      this.setState({
        checked: !checked,
        className: this.props.className
      });
      Object.keys(darkMode).forEach(key => {
        document.documentElement.style.setProperty(key, darkMode[key]);
      });
      
    } else {
      // Developer note : Can use classNames from npm 
      // currently just adding string 
      this.setState({
        checked: !checked,
        className: this.props.className + " day"
      });
      Object.keys(normalMode).forEach(key => {
        document.documentElement.style.setProperty(key, normalMode[key]);
      });
    }
    this.props.setThemeDark(!this.state.checked);
  }

  render() {
    return (
    <NightButton
        onClick={this.handleChange}
        className={this.state.className}
    />
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  { setThemeDark }
)(Toggle);
