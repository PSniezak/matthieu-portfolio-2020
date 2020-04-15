import React from "react";
import { Router, Location } from "@reach/router";
import { af as AF } from "@gladeye/af";

import { AppContext } from "context/app-context";

import TransitionRouter from "components/TransitionRouter";
import Header from "components/Header";
import Home from "components/Home";
import Case from "components/Pages/Case";
import Works from "components/Works";
import About from "components/About";
import { ParallaxProvider } from "react-scroll-parallax";

import { isMobile } from "utils/is-mobile";
import ReactCursorPosition from "react-cursor-position";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.af = AF();

    this.state = {
      appContext: {
        speedY: 0,
        transitionDuration: 800,
        wheelActive: false,
        // loaderActive: true,
        loaderActive: false,
        location: {
          current: "",
          previous: "",
          slug: null
        }
      }
    };
  }

  componentDidMount() {
    if (!isMobile) {
      this.af.addRead(this.read);
      window.addEventListener("wheel", this.wheel);
    } else {
      document.body.classList.add("is-mobile");
    }
  }

  componentWillUnmount() {
    if (!isMobile) {
      this.af.removeRead(this.read);
      window.removeEventListener("wheel", this.wheel);
    }
  }

  wheel = e => {
    e.stopPropagation();
    this.speed = -e.deltaY * 0.5;

    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(this.wheelOff, 150);
    this.wheelOn();
  };

  wheelOff = () => {
    const { appContext } = this.state;
    const { wheelActive } = appContext;
    if (!wheelActive) return;

    this.speed = 0;
    this.setState(({ appContext }) => {
      appContext.wheelActive = false;
      appContext.speedY = this.speed;
      return { appContext };
    });
  };

  wheelOn = () => {
    const { appContext } = this.state;
    const { wheelActive } = appContext;
    if (wheelActive) return;

    this.setState(({ appContext }) => {
      appContext.wheelActive = true;
      return { appContext };
    });
  };

  finishIntro = () => {
    this.setState(({ appContext }) => {
      appContext.loaderActive = false;
      return { appContext };
    });
  };

  read = () => {
    const { appContext } = this.state;
    const { wheelActive } = appContext;

    if (!wheelActive) return;

    function set({ appContext }) {
      appContext.speedY = this.speed;
      return { appContext };
    }

    this.setState(set);
  };

  handleLocationChange = (previous, current, slug) => {
    this.setState(({ appContext }) => {
      appContext.location = { current, previous, slug };
      return { appContext };
    });
  };

  finishLoader = () => {
    this.setState(({ appContext }) => {
      appContext.loaderActive = false;
      return { appContext };
    });
  };

  render() {
    const { appContext } = this.state;
    const { loaderActive } = appContext;
    const { current, previous } = appContext.location;

    return (
      <div className={`app`}>
        <div className="app__overlay"></div>

        <AppContext.Provider value={appContext}>
          {loaderActive && current === "home" && !previous ? "" : <Header />}
          <Location>
            {({ location }) => (
              <TransitionRouter
                onLocationChange={this.handleLocationChange}
                location={location}
                classNames="page"
                onEnter={this.handleEnter}
                onEntering={this.handleEntering}
                onEntered={this.handleEntered}
                onExit={this.handleExit}
                className={`transition`}
              >
                {state => (
                  <Router location={location} primary={false}>
                    <Home
                      path="/"
                      state={state}
                      finishLoader={this.finishLoader}
                    />

                    {<Case path="case/:slug" state={state} />}
                    {<Works path="/works" state={state} />}
                    {<About path="/about" state={state} />}
                  </Router>
                )}
              </TransitionRouter>
            )}
          </Location>
        </AppContext.Provider>
      </div>
    );
  }
}
