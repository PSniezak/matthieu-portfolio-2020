import React from "react";
import { Link } from "@reach/router";

import { AppContext } from "context/app-context";

import { timeline } from "utils/timeline";

import { data } from "data";

export default class Showcaser extends React.Component {
  static contextType = AppContext;

  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {};
  }

  componentDidMount() {
    this.check();
  }

  componentDidUpdate(prevProps) {
    this.check();
  }

  check() {
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
  }

  animateIn(delay = 0) {
    if (this.status === "entering") return;

    this.status = "entering";

    timeline({}).add({
      targets: this.ref.current.children,
      opacity: [0, 1],
      translateY: [80, 0],
      translateZ: 0,
      easing: "easeOutQuart",
      duration: 1000,
      delay
    });
  }

  animateOut() {
    const { transitionDuration } = this.context;
    if (this.status === "exiting") return;

    this.status = "exiting";

    let duration = transitionDuration;

    timeline({}).add({
      targets: this.ref.current,
      opacity: [1, 0],
      easing: "easeInOutQuart",
      duration: duration
    });
  }

  render() {
    return (
      <div className={`showcaser`} ref={this.ref}>
        <div className={`showcaser__slider`}>
          {data.projects.map((project, i) => {
            return (
              <Link to={`/case/${project.slug}`} key={i}>
                {project.name}/
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
