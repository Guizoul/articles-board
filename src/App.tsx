import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
// import { useState, useEffect } from "react";

// import CardList from "./components/card-list/card-list.component";
// import SearchBox from "./components/search-box/search-box.component";
// // import InputText from "./components/text-input/text-input.component";
// import Button from "./components/button/button.component";
// import LangSelection from "./components/select/select.component";

// // import logo from "./logo.svg";
// import { getData } from "./utils/data.utils";

// import "./App.css";

// const App = () => {
//   const [searchField, setSearchField] = useState("");
//   const [articles, setArticles] = useState([]);
//   const [filteredArticles, setFilteredArticles] = useState(articles);
//   // const [currentLang] = useState("en");

//   console.log("render");

//   // Fetching data from API and updating state
//   const fetchAndUpdateState = async (
//     currentLang = "en",
//     searchKeyword = "sport"
//   ) => {
//     const response = await getData(
//       `https://api.newscatcherapi.com/v2/search?q=${searchKeyword}&lang=${currentLang}`,
//       {
//         headers: {
//           "x-api-key": "xuAZvhofDuckJylLnSSHxcbIS7l1SfgV5bBOvTmiPxY\n",
//         },
//       }
//     );

//     const data = response.json();

//     if (data?.total_hits !== 0) {
//       setArticles(data?.articles);
//       return;
//     }
//     alert("no results try another search keyword (¬‿¬)");

//     return fetch(
//       `https://api.newscatcherapi.com/v2/search?q=${searchKeyword}&lang=${currentLang}`,
//       {
//         headers: {
//           "x-api-key": "xuAZvhofDuckJylLnSSHxcbIS7l1SfgV5bBOvTmiPxY\n",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.total_hits !== 0) {
//           setArticles(data.articles);
//           return;
//         }
//         alert("no results try another search keyword (¬‿¬)");
//       });
//   };

//   // Resolve the rerendering
//   useEffect(() => {
//     fetchAndUpdateState();
//   }, []);

//   useEffect(() => {
//     const newFilteredArticles = articles.filter((article) => {
//       return article.title.toLocaleLowerCase().includes(searchField);
//     });

//     setFilteredArticles(newFilteredArticles);
//   }, [articles, searchField]);

//   // console.log({ searchField });

//   const onSearchChange = (event) => {
//     // console.log(event.target.value);
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };

//   const onClickHandler = async (event) => {
//     const searchKeyword = document.querySelector(".input").value;
//     const currentLang = document.querySelector(".lang-selection").value;
//     if (searchKeyword === "") {
//       alert("Please enter a valid search keyword");
//     } else {
//       await fetchAndUpdateState(currentLang, searchKeyword);
//     }
//   };

//   const changeLang = async (event) => {
//     const searchKeyword = document.querySelector(".input").value;
//     if (searchKeyword !== "")
//       await fetchAndUpdateState(event.target.value, searchKeyword);
//     else await fetchAndUpdateState(event.target.value);
//   };

//   return (
//     <div className="App">
//       <h1 className="app-title">E-NEWS ARTICLES</h1>
//       <h1 className="app-second-title">Discover what's new easy pizzy</h1>
//       <div className="nav-bar">
//         <div className="keyword-input">
//           <SearchBox
//             type="search"
//             className="input"
//             placeholder="search keyword"
//             defaultValue={""}
//           />

//           <Button
//             onClickHandler={onClickHandler}
//             className="submit-btn"
//             type="submit"
//             value="Search"
//           />
//         </div>
//         <SearchBox
//           className="articles-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="filter articles by words"
//         />
//         <LangSelection
//           className="lang-selection"
//           changeLang={changeLang}
//           defaultValue="en"
//         />
//       </div>
//       <CardList articles={filteredArticles} />
//       {/* <Footer className="footer" style={{ position: "fixed" }} /> */}
//     </div>
//   );
// };

// // class App extends Component {
// //   constructor() {
// //     super();

// //     this.state = {
// //       // monsters: this.monsters,
// //       articles: [],
// //       searchField: "",
// //       country: "",
// //     };
// //     // console.log(1);
// //   }

// //   ////// Deactivated for now until finishing the project locally
// //   //////////////////////////////////////////////////////////////

// //   componentDidMount() {
// //     // console.log(3);
// //     // const date = new Date().toISOString().toString().split("T")[0];
// //     // const url = "https://newsapi.org/v2/everything?q=Apple&from=" +
// //     // date +
// //     // "&sortBy=popularity&apiKey=11ae9f5c20cc4f24a3a36e2cd0a73374";

// //     // const country = document.querySelector(".country-input").value;
// //     // console.log(country);

// // fetch(
// //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=11ae9f5c20cc4f24a3a36e2cd0a73374"
// // )
// //   .then((res) => res.json())
// //   .then((data) =>
// //     this.setState(
// //       () => {
// //         return { articles: data.articles };
// //       },
// //       () => {
// //         // console.log(this.state);
// //       }
// //     )
// //   );
// //   }

// //   onSearchChange = (event) => {
// //     // console.log(event.target.value);
// //     const searchField = event.target.value.toLocaleLowerCase();

// //     // event.target.value
// //     this.setState(() => {
// //       return { searchField };
// //     });
// //   };

// //   onClickHandler = async (event) => {
// //     const searchKeyword = document.querySelector(".input").value;
// //     if (searchKeyword === "") {
// //       alert("Please enter a valid search keyword");
// //     } else {
// //       await fetch(
// //         `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=11ae9f5c20cc4f24a3a36e2cd0a73374`
// //       )
// //         .then((res) => res.json())
// //         .then((data) =>
// //           this.setState(
// //             () => {
// //               if (data.totalResults !== 0) return { articles: data.articles };
// //               alert(
// //                 "no results verify the country abbreviation and try again check this link https://sustainablesources.com/resources/country-abbreviations/"
// //               );
// //             },
// //             () => {
// //               // console.log(this.state);
// //             }
// //           )
// //         );
// //     }
// //   };

// //   render() {
// //     // console.log(2);

// //     const { articles, searchField } = this.state;
// //     const { onSearchChange } = this;

// //     const filteredArticles = articles.filter((article) => {
// //       return article.title.toLocaleLowerCase().includes(searchField);
// //     });
// //     console.log(filteredArticles);
// //     return (
// //       <div className="App">
// //         <h1 className="app-title">Articles board</h1>
// //         <InputText
// //           type="text"
// //           className="input"
// //           placeholder="country (ex: us | fr | uk)"
// //           defaultValue={"us"}
// //         />

// //         <Button
// //           onClickHandler={this.onClickHandler}
// //           className="submit-btn"
// //           type="submit"
// //           value="Submit"
// //         />

// //         <SearchBox
// //           className="articles-search-box"
// //           onChangeHandler={onSearchChange}
// //           placeholder="search articles"
// //         />
// //         <CardList articles={filteredArticles} />
// //       </div>
// //     );
// //   }
// // }

// export default App;
