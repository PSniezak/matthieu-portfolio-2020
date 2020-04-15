import React from "react";

import { AppContext } from "context/app-context";

import { Link } from "@reach/router";

import { timeline } from "utils/timeline";
import { isMobile } from "utils/is-mobile";

class Header extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.wrapRef = React.createRef();
  }

  componentDidMount() {
    this.animateIn();
  }

  animateIn() {
    if (this.status === "entering") return;

    this.status = "entering";

    timeline({}).add({
      targets: this.wrapRef.current,
      opacity: {
        value: [0, 1]
      },
      translateY: [-100, 0],
      translateZ: 0,
      easing: "easeOutQuart",
      duration: 1000
    });
  }

  isActive = status => {
    return status.isCurrent ? { className: "active" } : {};
  };

  render() {
    const { current } = this.context.location;
    const theme = current === "about" ? "light" : "dark";

    return (
      <div className={`header`}>
        <div className={`header__wrap`} ref={this.wrapRef}>
          <Link to="/" className={`header__logo`}>
            <img
              src={require("images/logo.svg")}
              getProps={this.isActive}
              alt="Matthieu Tourdes"
            />
          </Link>
          <div className={`header__links header__links--${theme}`}>
            {!isMobile ? (
              <Link to="/works" getProps={this.isActive}>
                Works
                <svg viewBox="0 0 205 120">
                  <g display="block">
                    <path
                      fillOpacity="0"
                      stroke="#D91F26"
                      d="M38.5-20c-12.75-2.25-80.125-.125-80.75 30.75 0 23.875 74.25 2.75 80.5-8 3.06-5.263-4.375-20.5-50.625-14.25S-39.25 22.625-22.75 21.875C-12.01 21.387 26 18.75 41.5 6.25s-44.75-36-78.25-2.5S33 20 42 1.75-26.5-12-40.125 9.625"
                      transform="matrix(2 0 0 2 102.5 60)"
                    ></path>
                  </g>
                </svg>
              </Link>
            ) : null}
            <Link to="/about" getProps={this.isActive}>
              About
              <svg viewBox="0 0 205 120">
                <g display="block">
                  <path
                    fillOpacity="0"
                    stroke="#FFF"
                    d="M38.5-20c-12.75-2.25-80.125-.125-80.75 30.75 0 23.875 74.25 2.75 80.5-8 3.06-5.263-4.375-20.5-50.625-14.25S-39.25 22.625-22.75 21.875C-12.01 21.387 26 18.75 41.5 6.25s-44.75-36-78.25-2.5S33 20 42 1.75-26.5-12-40.125 9.625"
                    transform="matrix(2 0 0 2 102.5 60)"
                  ></path>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
