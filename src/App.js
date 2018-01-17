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
    highScore: 0
  };
  

  handleCardClick = (cardId) => {
    let alreadyPicked;
    let highestScore;
    (this.state.score > this.state.highScore) ? highestScore = this.state.score : highestScore = this.state.highScore;
    this.state.cardsClicked.includes(cardId)? alreadyPicked = true : alreadyPicked = false;
    alreadyPicked? this.setState({highScore: highestScore, tarot: this.shuffleArray(this.state.tarot), score: 0, cardsClicked: []}) : this.setState({ cardsClicked: [...this.state.cardsClicked, cardId], score: this.state.score + 1, tarot: this.shuffleArray(this.state.tarot)});
  }
  
  shuffleArray = (array) => {
    let newArray = [...array];
    let i = newArray.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  }
  
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title> Memory Game! </Title>
          <Title> Pick all cards in sequence without selecting the same one twice. </Title>
          <Title> Score: {this.state.score} High Score: {this.state.highScore} </Title>
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
