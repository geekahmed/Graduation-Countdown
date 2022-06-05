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
        const displayTimer = ()=>{
          return 'newSubject'
        }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Graduation Countdown</h2>
        </div>
        <h3 className="title">
          Graduation from this misery is coming soon (Noon of 18th of July, UTC+2 time):
        </h3>
        <Countdown date={`${year}-07-18T16:00:00`} />
        <div>
          <h3 className="textPrimary">Final Automata Exam (1/5) ✅</h3>
          <br/>
        </div>
        <div>
          <h3 className="textPrimary">Final Process Control  (2/5) 🚨</h3>
          <p className="textPrimary">(Don't trust Anany)</p>
          <p><a href="https://docs.google.com/document/d/1oozQDvqqd2nSV1G8gac3YCmkwzSRQj9ROlGc-CKS7qI/edit" target="_blank">Google Docs file</a></p>
          <Countdown date={`${year}-06-08T16:00:00`} />
        </div>
        <div className="player">
          <ReactPlayer controls={true} url="https://www.youtube.com/watch?v=5qap5aO4i9A" playing={true} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
