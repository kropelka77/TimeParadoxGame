import React from "react";
import "./App.css";
import "./styles/footer.css";
import "./styles/main.css";

import Board from "./components/Board.js";
import Header from "./components/Header.js";
import { getGame } from "./components/Game.js";
import { initAnalytics, trackPage } from "./utils/analytics"

class App extends React.Component {
  constructor() {
    super();
    const game = getGame();
    this.state = {
      showingSolution: false,
      showingRules: false,
      showingCheck: false,
      isCorrect: true,
      won: false,
      boardState: game.boardState,
      labels: game.labels
    };
  }

  componentDidMount() {
    initAnalytics()
    trackPage()
 }

  render() {
    return (
      <div className="App">
        {this.state.won && <div className="overlay" />}
        <Header
          showContent={this.showContent.bind(this)}
          showingRules={this.state.showingRules}
          showingCheck={this.state.showingCheck}
          checkCorrect={this.checkCorrect.bind(this)}
          isCorrect={this.state.isCorrect}
          newGame={this.newGame.bind(this)}
        />

        <main>
          <Board
            data={this.state.boardState}
            labels={this.state.labels}
            showingSolution={this.state.showingSolution}
            handleCellClick={this.handleCellClick.bind(this)}
            won={this.state.won}
            newGame={this.newGame.bind(this)}
          />
          <div className="description">
            <p>Every Tardis needs its Doctor.</p>
            <p>Help them connect in the time-spice continuum.</p>
            <p>Avoid the time paradox - Doctors cannot see each other!</p>
          </div>
        </main>

        <footer>
          <p>&copy; 2018 Dorota Siwek</p>
          <p>Created for the purpose of training</p>
        </footer>
      </div>
    );
  }

  showContent(showing, newState) {
    if (newState === undefined) {
      this.setState({
        [showing]: !this.state[showing]
      });
    } else {
      this.setState({
        [showing]: newState
      });
    }
  }

  checkCorrect() {
    const data = this.state.boardState;
    let isCorrect = true;

    data.forEach(row => {
      row.forEach(element => {
        if (
          (element.correct === "doctor" && element.user === "x") ||
          (element.correct === "x" && element.user === "doctor")
        ) {
          isCorrect = false;
        }
      });
    });

    this.setState({
      isCorrect: isCorrect
    });

    return isCorrect;
  }

  win() {
    const data = this.state.boardState;

    function countDoctors(data, type) {
      let count = 0;
      data.forEach(row => {
        row.forEach(element => {
          if (element[type] === "doctor") {
            count++;
          }
        });
      });
      return count;
    }

    if (countDoctors(data, "user") === countDoctors(data, "correct")) {
      if (this.checkCorrect()) {
        this.setState({
          won: true
        });
      }
    }
  }

  handleCellClick(x, y, event) {
    event.preventDefault();
    event.target.focus();
    let data = this.state.boardState;

    if (event.button === 0) {
      if (data[x][y].user === "empty") {
        data[x][y].user = "x";
      } else if (data[x][y].user === "x") {
        data[x][y].user = "doctor";
      } else if (data[x][y].user === "doctor") {
        data[x][y].user = "empty";
      }
    } else if (event.button === 2) {
      event.preventDefault();
      if (data[x][y].user === "empty") {
        data[x][y].user = "doctor";
      } else if (data[x][y].user === "x") {
        data[x][y].user = "empty";
      } else if (data[x][y].user === "doctor") {
        data[x][y].user = "x";
      }
    }

    this.setState(() => {
      return {
        boardState: data
      };
    }, this.win);
  }

  newGame() {
    const newGame = getGame();

    this.setState(() => {
      return {
        showingSolution: false,
        showingRules: false,
        showingCheck: false,
        isCorrect: true,
        won: false,
        boardState: newGame.boardState,
        labels: newGame.labels
      };
    });
  }
}

export default App;
