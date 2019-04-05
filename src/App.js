import React, { Component } from 'react';
import ShuffleCard from "../src/Components/ShuffleCard";
import './App.css';
import cards from "./cards.json";


// Array.prototype.shuffle = function () {
//   let i = this.length, j, temp;
//   while (--i > 0) {
//     j = Math.floor(Math.random() * (i + 1));
//     temp = this[j];
//     this[j] = this[i];
//     this[i] = temp;
//   }
//   return this;
// }

class App extends Component {
  state = {
    cards
  };

   shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

  // ShuffleCard(array) {
  //     for (let i = array.length - 1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * (i + 1));
  //       [array[i], array[j]] = [array[j], array[i]];
  //     }
  //     return array;
  //   };

  handleClick = () => {
    console.log("click");
    console.log(this.state.cards);
    const cards = this.shuffle(this.state.cards);
    this.setState({ cards });
    console.log(cards);
  };



  render() {
    return (
      <div className="wrapper">
        <header className="App-header">
          <h1 className="title">80s Cartoon Click Game</h1>
        </header>
        {this.state.cards.map(card => (
        <ShuffleCard
          shuffleCard={this.shuffleCard}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
          handleClick={this.handleClick}
        />
      ))}
      </div>
    );
  };
};



export default App;
