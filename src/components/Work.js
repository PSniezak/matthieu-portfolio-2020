import React from "react";
import { Link } from "@reach/router";
import ReactCursorPosition from "react-cursor-position";

import { AppContext } from "context/app-context";

import ScrollWrapper from "components/ScrollWrapper";
import Cursor from "./Cursor";

import { timeline } from "utils/timeline";

import { data } from "data";

export default class Work extends React.Component {
  static contextType = AppContext;

  status = null;
  displayElements = 0;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.content = React.createRef();
    this.title = React.createRef();
    this.projects = data.projects.map((el) => {
      return React.createRef();
    });

    this.state = {
      cursorVisible: false,
      cursorContent: "",
      cursorColor: "red",
    };
  }

  componentDidUpdate(prevProps) {
    const { previous } = this.context.location;
    const { state } = this.props;

    if (previous) {
      if (state === "exiting") {
        this.animateOut();
      }

      if (state === "entering") {
        this.animateIn(400);
      }
    } else {
      if (state === "entered") {
        this.animateIn(0);
      }
    }

    for (let index = 0; index < this.projects.length; index++) {
      if (state === "entering") return;

      const element = this.projects[index];

      if (this.displayElements < index + 1) {
        let wh =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        let r = element.current.getBoundingClientRect();

        let pr =
          (1 - (r.top + r.height * (1 - 0)) / (wh + r.height * (1 - 0 * 2))) *
            2 -
          1;

        if (pr > -0.7 && pr < 1) {
          this.displayElements = this.displayElements + 1;

          timeline({}).add({
            targets: element.current,
            opacity: [0, 1],
            translateY: [80, 0],
            easing: "easeOutQuart",
            duration: 2000,
          });
        }
      }
    }
  }

  animateIn(delay = 0) {
    if (this.status === "entering") return;

    this.status = "entering";

    timeline({}).add({
      targets: this.title.current,
      opacity: [0, 1],
      translateY: [80, 0],
      translateZ: 0,
      easing: "easeOutQuart",
      duration: 1000,
      delay,
    });
  }

  animateOut() {
    const { transitionDuration } = this.context;
    if (this.status === "exiting") return;

    this.status = "exiting";

    let duration = transitionDuration;

    timeline({}).add({
      targets: this.ref.current.children,
      opacity: [1, 0],
      easing: "easeInOutQuart",
      duration: duration,
    });
  }

  setCursor = (visible, text, color = "red") => {
    this.setState({
      cursorVisible: visible,
      cursorContent: text,
      cursorColor: color,
    });
  };

  render() {
    const { state } = this.props;
    const { cursorContent, cursorVisible, cursorColor, position } = this.state;

    let projects = data.projects.map((project, i) => (
      <Link
        key={i}
        to={`/case/${project.slug}`}
        className={"works__project"}
        ref={this.projects[i]}
        onMouseEnter={() => this.setCursor(true, "See project")}
        onMouseLeave={() => this.setCursor(false, "")}
      >
        <div>
          <span>{`0${i + 1}`}</span>
          <h3>{project.name}/</h3>
        </div>
        <img src={project.mainImage} alt="" />
      </Link>
    ));

    return (
      <ReactCursorPosition
        onPositionChanged={(props) => {
          let newProps = props;
          let offset = !this.context.scrollY ? 0 : this.context.scrollY;
          newProps.position.y = newProps.position.y - offset;
          this.setState(newProps);
        }}
      >
        <div className={`works`} ref={this.ref}>
          <ScrollWrapper state={state}>
            <div className={`works__content`} ref={this.content}>
              <Cursor
                {...position}
                visible={cursorVisible}
                text={cursorContent}
                color={cursorColor}
              />
              <h2 ref={this.title}>Work/</h2>
              {projects}
            </div>
          </ScrollWrapper>
        </div>
      </ReactCursorPosition>
    );
  }
}
