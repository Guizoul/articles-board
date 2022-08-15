import { Component } from "react";

import "./text-input.styles.css";

class InputText extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        defaultValue={this.props.defaultValue}
      />
    );
  }
}

export default InputText;
