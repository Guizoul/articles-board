import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import InputText from "./components/text-input/text-input.component";
import Button from "./components/button/button.component";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // monsters: this.monsters,
      articles: [],
      searchField: "",
      country: "",
    };
    // console.log(1);
  }

  ////// Deactivated for now until finishing the project locally
  //////////////////////////////////////////////////////////////

  componentDidMount() {
    // console.log(3);
    // const date = new Date().toISOString().toString().split("T")[0];
    // const url = "https://newsapi.org/v2/everything?q=Apple&from=" +
    // date +
    // "&sortBy=popularity&apiKey=11ae9f5c20cc4f24a3a36e2cd0a73374";

    // const country = document.querySelector(".country-input").value;
    // console.log(country);

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=11ae9f5c20cc4f24a3a36e2cd0a73374"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState(
          () => {
            return { articles: data.articles };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    // event.target.value
    this.setState(() => {
      return { searchField };
    });
  };

  onClickHandler = async (event) => {
    const country = document.querySelector(".input").value;
    if (country === "") {
      alert("Please enter a valid country abbreviation");
    } else {
      await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=11ae9f5c20cc4f24a3a36e2cd0a73374`
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState(
            () => {
              if (data.totalResults !== 0) return { articles: data.articles };
              alert(
                "no results verify the country abbreviation and try again check this link https://sustainablesources.com/resources/country-abbreviations/"
              );
            },
            () => {
              // console.log(this.state);
            }
          )
        );
    }
  };

  render() {
    // console.log(2);

    const { articles, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredArticles = articles.filter((article) => {
      return article.title.toLocaleLowerCase().includes(searchField);
    });
    console.log(filteredArticles);
    return (
      <div className="App">
        <h1 className="app-title">Articles board</h1>
        <InputText
          type="text"
          className="input"
          placeholder="country (ex: us | fr | uk)"
          defaultValue={"us"}
        />

        <Button
          onClickHandler={this.onClickHandler}
          className="submit-btn"
          type="submit"
          value="Submit"
        />

        <SearchBox
          className="articles-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search articles"
        />
        <CardList articles={filteredArticles} />
      </div>
    );
  }
}

export default App;
