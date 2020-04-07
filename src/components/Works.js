import React from "react";

import { AppContext } from "context/app-context";

import ScrollWrapper from "components/ScrollWrapper";

import { timeline } from "utils/timeline";

export default class Works extends React.Component {
  static contextType = AppContext;

  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {};
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
    const { state } = this.props;

    return (
      <div className={`works`} ref={this.ref}>
        <ScrollWrapper state={state}>
          <div className={`works__content`} ref={this.content}>
            <h2>Works</h2>
            <div></div>
          </div>
        </ScrollWrapper>
      </div>
    );
  }
}
