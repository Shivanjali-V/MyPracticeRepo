import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);
    // State to store entry & exit counts
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  // Method to increment entry count
  updateEntry = () => {
    this.setState({ entryCount: this.state.entryCount + 1 });
  };

  // Method to increment exit count
  updateExit = () => {
    this.setState({ exitCount: this.state.exitCount + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <button
          onClick={this.updateEntry}
          style={{ marginRight: "20px", padding: "5px", backgroundColor: "#c8f7c5" }}
        >
          Login
        </button>
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
          {this.state.entryCount} People Entered!!!
        </span>

        <br /> <br />

        <button
          onClick={this.updateExit}
          style={{ marginRight: "20px", padding: "5px", backgroundColor: "#c8f7c5" }}
        >
          Exit
        </button>
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
          {this.state.exitCount} People Left!!!
        </span>
      </div>
    );
  }
}

export default CountPeople;
