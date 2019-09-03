import React, { Component } from "react";
import ReactGA from "react-ga";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.scss";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";
import Resume from "./Components/Resume.jsx";
import Contact from "./Components/Contact.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Toggle from "./Components/Mini-Components/toggle.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    axios
      .get("/resumeData.json")
      .then(({ data }) => {
        this.setState({ resumeData: data });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  componentWillMount() {
    this.getResumeData();
  }

  render() {
    return (
      <React.Fragment>
        <div className="App normal-mode">
          <Toggle className="toggle-dark" />
          <Header data={this.state.resumeData.main} />
          <About data={this.state.resumeData.main} />
          <Resume data={this.state.resumeData.resume} />
          <Portfolio data={this.state.resumeData.portfolio} />
          <Testimonials data={this.state.resumeData.testimonials} />
          <Contact data={this.state.resumeData.main} />
          <Footer data={this.state.resumeData.main} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
