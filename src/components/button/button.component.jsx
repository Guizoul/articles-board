import { Component } from "react";

import "./button.styles.css";

class Button extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        value={this.props.value}
        onClick={this.props.onClickHandler}
      />
    );
  }
}

export default Button;
