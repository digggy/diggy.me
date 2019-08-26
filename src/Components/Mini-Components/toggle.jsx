import React from "react";
import { FormCheckbox } from "shards-react";
import _global from "../../css/global/_global.scss";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      className: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if (!this.state.checked) {
      this.setState({
        checked: !this.state.checked,
        className: "dark-mode"
      });
    } else {
      this.setState({
        checked: !this.state.checked,
        className: "normal-mode"
      });
    }
  }

  render() {
    return (
      <FormCheckbox
        className={this.state.className}
        toggle
        checked={this.state.checked}
        onChange={this.handleChange}
        // className={this.props.className}
      />
    );
  }
}

export default Toggle;
