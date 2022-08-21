import "./button.styles.css";

const Button = ({ className, type, value, onClickHandler }) => (
  <input
    className={className}
    type={type}
    value={value}
    onClick={onClickHandler}
  />
);

export default Button;
