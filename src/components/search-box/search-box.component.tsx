import { ChangeEvent, MouseEvent } from "react";

import "./search-box.styles.css";

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const onClickHanler = (event: MouseEvent<HTMLInputElement>) => {
  const SearchBox: HTMLInputElement = event.currentTarget;
  SearchBox?.classList.add("active");
  document.querySelector(".App")?.addEventListener("click", (e) => {
    SearchBox?.classList.remove("active");
  });
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
  defaultValue,
}: ISearchBoxProps) => {
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
