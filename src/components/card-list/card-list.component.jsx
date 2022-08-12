import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        <h1>Monsters List</h1>
        {monsters.map((monster) => (
          <h3 key={monster.id}>{monster.name}</h3>
        ))}
        ;
      </div>
    );
  }
}

export default CardList;
