import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { title, link, excerpt, media } = this.props.article;

    return (
      <div
        className="card-container"
        key={
          title.slice(0, Math.floor(Math.random() * title.length)) +
          Math.random() * title.length
        }
      >
        <img
          loading="lazy"
          src={media}
          alt={`article ${title}`}
          className="card-img"
        />
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <a
          className="link"
          href={`${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more →
        </a>
      </div>
    );
  }
}

export default Card;
