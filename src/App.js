import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./images/logo.gif";
import ReactPlayer from "react-player";

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
          Graduation from this misery is coming soon (Noon of 18th of July, UTC+2 time):
        </h3>
        <Countdown date={`${year}-07-18T17:00:00`} />
        <ReactPlayer className="Countdown" controls={true} url="https://www.youtube.com/watch?v=yOUX-eWwfF0" playing={true}/>
      </div>
    );
  }
}

export default App;
