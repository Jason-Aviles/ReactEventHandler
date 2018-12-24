import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const green = "darkgreen";

const blue = "darkred";

const hello = "Hello";
const bye = "GOODBye";

const Welcome = "Welcome home Master Jason";
const exit = "You are not the Master you cant enter";

const hey = "we are glad to see you.";
const seeya = "you cant stay goo!!";

class App extends React.Component {
  state = { color: green, text: hello, title: Welcome, content: hey };

  changeColor = () => {
    const newColor = this.state.color === green ? blue : green;
    this.setState({ color: newColor });
    const newText = this.state.text === hello ? bye : hello;
    this.setState({ text: newText });
    const newTitle = this.state.title === Welcome ? exit : Welcome;
    this.setState({ title: newTitle });
    const newP = this.state.content === hey ? seeya : hey;
    this.setState({ content: newP });
  };

  render() {
    return (
      <div className="App" style={{ background: this.state.color }}>
        <h1>{this.state.text}</h1>
        <hr />
        <button className="btn" onClick={this.changeColor}>
          press
        </button>
        <h2>{this.state.title}</h2>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
