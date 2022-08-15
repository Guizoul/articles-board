import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { title, url, description, urlToImage } = this.props.article;
    return (
      <div className="card-container" key={title + url}>
        <img
          loading="lazy"
          src={urlToImage}
          alt={`article ${title}`}
          className="card-img"
        />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={`${url}`} target="_blank" rel="noopener noreferrer">
          Read more →
        </a>
      </div>
    );
  }
}

export default Card;
