import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./images/logo.gif";
import image from "./images/image.jpg"
import zetna from "./images/zetna.jpg"
import hant from "./images/hant.jpg"
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
            <h3 className="textPrimary">Final Fiber Optics Exam (3/5) ✅</h3>
            <h3 className="textPrimary">Final Measurement Exam (4/5) ✅</h3>
            <br />
            {/* <div className="apologyToMorgan">
            <q>أخواني لا يجب أن تحركنا الاحقاد عن الناجحين والمتفوقين, لقد هاجمنا هنا من نفس هذا المكان أشخاص قدموا لنا الكثير, ولكن ما أن وضحت لنا الحقيقة حتي رجعنا عما كنا فيه وندمنا علي ما فعلنا </q>
            <img src={image} className="responsive" height="330" width="530" alt="أخواتي لقد تسرعنا"></img>
            </div> */}
          </div>
          <div>       
            {/* <p className="textPrimary">(دخيـــلك معلم سيـــد لا تقوصنــي)</p> */}
            <h3 className="textPrimary">Final Database Exam (5/5) 🚨</h3>
            <br/>
            <img src={hant} className="hant" height="330" width="530" alt="هانت يا معلم"></img>
            <p><a href="https://docs.google.com/document/d/1j1uKAcZpUD6PbXdr_eCnszbzCRpSbu1YT3Vo8J2ThXg/edit" target="_blank">Google Docs file</a></p>
            <Countdown date={`${year}-06-19T16:00:00`} />
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
