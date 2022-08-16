import "./button.styles.css";

const Button = () => (
  <input
    className={this.props.className}
    type={this.props.type}
    value={this.props.value}
    onClick={this.props.onClickHandler}
  />
);

export default Button;
