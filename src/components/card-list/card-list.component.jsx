import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ articles }) => (
  <div className="card-list">
    {articles.map((article) => {
      return <Card article={article} />;
    })}
    ;
  </div>
);

export default CardList;
