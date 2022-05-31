import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./images/logo.gif";
import ReactPlayer from "react-player";
import Footer from "./components/Footer.js";
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
        <h3 className="textPrimary">Final Automata Exam 🚨</h3>
        <p className="textPrimary">(Somehow we will get through it.)</p>
        <p><a href="https://docs.google.com/document/d/18Esh8CXDo1HPhuXyoSBZDvLlxBwo89zJabxXo_HUYlA/edit" target="_blank">Google Docs file</a></p>
        <Countdown date={`${year}-06-05T16:00:00`} />
        <div className="player">
          <ReactPlayer controls={true} url="https://www.youtube.com/watch?v=yOUX-eWwfF0" playing={true} />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
