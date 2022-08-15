import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { title, link, description, urlToImage } = this.props.article;
    return (
      <div className="card-container" key={title}>
        <img src={urlToImage} alt={`article ${title}`} className="card-img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={`${link}`}>Read more →</a>
      </div>
    );
  }
}

export default Card;
