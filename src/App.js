import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./images/logo.gif";
import image from "./images/image.jpg"
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Graduation Countdown</h2>
        </div>
        <div>
          <h3 className="title">
            Graduation from this misery is coming soon (Noon of 18th of July, UTC+2 time):
          </h3>
          <Countdown date={`${year}-07-18T16:00:00`} />
          <div>
            <h3 className="textPrimary">Final Automata Exam (1/5) ✅</h3>
            <h3 className="textPrimary">Final Process Control (2/5) ✅</h3>
            <br />
            <div className="apologyToMorgan">
            <q>أخواني لا يجب أن تحركنا الاحقاد عن الناجحين والمتفوقين, لقد هاجمنا هنا من نفس هذا المكان أشخاص قدموا لنا الكثير, ولكن ما أن وضحت لنا الحقيقة حتي رجعنا عما كنا فيه وندمنا علي ما فعلنا </q>
            <img src={image} className="responsive" height="330" width="530" alt="أخواتي لقد تسرعنا"></img>
            </div>
          </div>
          <div>
            <br/>
            <h3 className="textPrimary">Final Fiber optics  (3/5) 🚨</h3>
            <p className="textPrimary">(There is no caption today)</p>
            <p><a href="https://docs.google.com/document/d/1WMYfu7o1qrcTtvB9FYu6CFG3q9RG8K_2Eniut__Ec_E/edit?usp=sharing" target="_blank">Google Docs file</a></p>
            <Countdown date={`${year}-06-12T16:00:00`} />
          </div>
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
