import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./images/logo.gif";
import CSE_ClassOf2022 from "./images/IMG_0940.jpg"
import ReactPlayer from "react-player";
import Footer from "./components/Footer.js";
class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    const displayTimer = () => {
      return 'newSubject'
    }
    return (
      <div className="card-content">
        <div>
          <h2 className="whatever-text " >Graduation Project Discussion</h2>
          <Countdown date={`${year}-07-18T16:00:00`} />
          <h3 className="textPrimary">Final Automata Exam (1/5) ✅</h3>
          <h3 className="textPrimary">Final Process Control (2/5) ✅</h3>
          <h3 className="textPrimary">Final Fiber Optics Exam (3/5) ✅</h3>
          <h3 className="textPrimary">Final Measurement Exam (4/5) ✅</h3>
          <h3 className="textPrimary">Final Database Exam (5/5) ✅</h3>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
