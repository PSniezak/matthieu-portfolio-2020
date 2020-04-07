import React from "react";

import { AppContext } from "context/app-context";

import ScrollWrapper from "components/ScrollWrapper";

import { timeline } from "utils/timeline";

import { data } from "data";

export default class Case extends React.Component {
  static contextType = AppContext;

  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.project = data.projects.find(x => x.slug === this.props.slug);

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

  animateOut() {}

  render() {
    const { state } = this.props;

    return (
      <div className={`case`} ref={this.ref}>
        <ScrollWrapper state={state}>
          <div className={`case__content`} ref={this.content}>
            <h2>{this.project.name}</h2>
            <div></div>
          </div>
        </ScrollWrapper>
      </div>
    );
  }
}
