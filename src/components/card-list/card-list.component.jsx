import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="card-list">
        {articles.map((article) => {
          return <Card article={article} />;
        })}
        ;
      </div>
    );
  }
}

export default CardList;
