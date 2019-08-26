import React from "react";
import { FormCheckbox } from "shards-react";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      darkMode: {
        "--main-background-color": "var(--dark-mode)",
        "--card-background-color": "var(--dark-card)",
        "--default-fontcolor": "var(--normal-mode)"
      },
      normalMode: {
        "--main-background-color": "var(--normal-mode)",
        "--card-background-color": "var(--normal-card)",
        "--default-fontcolor": "var(--dark-card)"
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { checked, darkMode, normalMode } = this.state;
    if (!checked) {
      this.setState({
        checked: !checked
      });
      Object.keys(darkMode).forEach(key => {
        document.documentElement.style.setProperty(key, darkMode[key]);
      });
    } else {
      this.setState({
        checked: !checked
      });
      Object.keys(normalMode).forEach(key => {
        document.documentElement.style.setProperty(key, normalMode[key]);
      });
    }
  }

  render() {
    return (
      <FormCheckbox
        toggle
        checked={this.state.checked}
        onChange={this.handleChange}
        className={this.props.className}
      />
    );
  }
}

export default Toggle;
