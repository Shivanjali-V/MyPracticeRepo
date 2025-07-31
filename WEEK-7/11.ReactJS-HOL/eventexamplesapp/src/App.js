import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    // Binding event handlers
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello(); // Invoking multiple methods
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  sayHello() {
    alert("Hello! Welcome to React Events");
  }

  sayWelcome(message) {
    alert(message);
  }

  handlePress(event) {
    alert("I was clicked");
    console.log("Synthetic Event:", event); // React Synthetic Event
  }

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h1>React Event Handling Example</h1>
        <h2>Counter Value: {this.state.counter}</h2>

        {/* Increment & Decrement */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        {/* Passing arguments */}
        <button onClick={() => this.sayWelcome("Welcome to React!")}>
          Say Welcome
        </button>

        <br /><br />

        {/* Synthetic Event */}
        <button onClick={this.handlePress}>OnPress</button>

        <br /><br />

        {/* Currency Converter */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
