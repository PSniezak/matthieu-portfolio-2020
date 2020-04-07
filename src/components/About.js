import React from "react";

import { AppContext } from "context/app-context";

import ScrollWrapper from "components/ScrollWrapper";

import { timeline } from "utils/timeline";

export default class About extends React.Component {
  static contextType = AppContext;

  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.bgRef = React.createRef();
    this.overlayRef = React.createRef();
    this.content = React.createRef();

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
    const { transitionDuration } = this.context;
    if (this.status === "entering") return;

    this.status = "entering";

    let easing = "easeOutExpo";
    let translateY = ["100%", "0%"];

    timeline({})
      .add({
        targets: this.bgRef.current,
        translateY: translateY,
        translateZ: 0,
        easing: easing,
        duration: transitionDuration,
        delay
      })
      .add({
        targets: this.content.current,
        opacity: [0, 1],
        easing: easing,
        duration: transitionDuration,
        delay
      });
  }

  animateOut() {
    const { transitionDuration } = this.context;
    if (this.status === "exiting") return;

    this.status = "exiting";

    let duration = transitionDuration;

    timeline({}).add({
      targets: this.overlayRef.current,
      translateY: ["-100%", "0%"],
      translateZ: 0,
      easing: "easeInOutQuart",
      duration: duration
    });
  }

  render() {
    const { state } = this.props;

    return (
      <div className={`about`} ref={this.ref}>
        <div className={`about__bg`} ref={this.bgRef}></div>
        <div className={`about__overlay`} ref={this.overlayRef}></div>

        <ScrollWrapper state={state}>
          <div classNam={`about__content`} ref={this.content}>
            <p>About</p>
          </div>
        </ScrollWrapper>
      </div>
    );
  }
}
