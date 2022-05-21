import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./logo.png";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Graduation Countdown</h2>
        </div>

        <h3 className="title">
          Graduation from this misery is coming soon (Noon of 19th of July, UTC+2 time):
        </h3>
        <Countdown date={`${year}-07-19T17:00:00`} />
      </div>
    );
  }
}

export default App;
