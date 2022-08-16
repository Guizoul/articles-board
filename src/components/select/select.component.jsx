import { Component } from "react";

import "./select.styles.css";

class LangSelection extends Component {
  render() {
    return (
      <form>
        <select
          className={this.props.className}
          onChange={this.props.changeLang}
          defaultValue={this.props.defaultValue}
        >
          <option value="ar">Arabic</option>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </form>
    );
  }
}

export default LangSelection;
