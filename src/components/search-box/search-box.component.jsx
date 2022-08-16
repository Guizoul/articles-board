import "./search-box.styles.css";

const onClickHanler = (event) => {
  const SearchBox = event.target;
  SearchBox.classList.add("active");
  document.querySelector(".App").addEventListener("click", (e) => {
    SearchBox.classList.remove("active");
  });
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
  defaultValue,
}) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
      defaultValue={defaultValue}
      onClick={onClickHanler}
    />
  );
};

export default SearchBox;
