import React, { Component } from 'react';
import TarotCard from "./components/TarotCard";
import Wrapper from "./components/Wrapper"; //Drop this later maybe.
import Title from "./components/Title";
import tarot from "./tarot.json";
import './App.css';

class App extends Component {

  state = {
    tarot,
    cardsClicked: [],
    score: 0,
  };
  

  handleCardClick = (cardId) => {
    let alreadyPicked;
    this.state.cardsClicked.includes(cardId)? alreadyPicked = true : alreadyPicked = false;
    alreadyPicked? this.setState({tarot: this.shuffleArray(this.state.tarot)}) : this.setState({ cardsClicked: [...this.state.cardsClicked, cardId], score: this.state.score + 1, tarot: this.shuffleArray(this.state.tarot)});
  }
  
  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title> Clicky Game! </Title>
          <Title> Score: {this.state.score} </Title>
          {this.state.tarot.map(card => (
            <TarotCard
              key={card.id}
              id={card.id}
              name={card.name}
              image={card.image}
              handleCardClick = {this.handleCardClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
