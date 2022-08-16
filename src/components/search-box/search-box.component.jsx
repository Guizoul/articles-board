import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  onClickHanler = (event) => {
    const SearchBox = event.target;
    SearchBox.classList.add("active");
    document.querySelector(".App").addEventListener("click", (e) => {
      SearchBox.classList.remove("active");
    });
  };
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
        defaultValue={this.props.defaultValue}
        onClick={this.onClickHanler}
      />
    );
  }
}

export default SearchBox;
