import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import DownloadCV from "./components/DownloadCV/DownloadCV";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";

import ScrollToTop from "./components/ScrollToTop";
import BackgroundContainer from "./components/BackgroundContainer";

ReactGA.initialize("G-KN1E14N8YK");

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" render={() => (
              <BackgroundContainer>
                <Projects />
              </BackgroundContainer>
            )} />
            <Route path="/about" render={() => (
              <BackgroundContainer>
                <About />
              </BackgroundContainer>
            )} />
            <Route path="/download-cv" render={() => (
              <BackgroundContainer>
                <DownloadCV />
              </BackgroundContainer>
            )} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
