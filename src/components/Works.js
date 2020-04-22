import React from "react";
import { Link } from "@reach/router";
import anime from "animejs";

import { AppContext } from "context/app-context";

import ScrollWrapper from "components/ScrollWrapper";

import { timeline } from "utils/timeline";

import { data } from "data";

export default class Works extends React.Component {
  static contextType = AppContext;

  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
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
    if (this.status === "entering") return;

    this.status = "entering";

    timeline({}).add({
      targets: this.content.current.children,
      opacity: [0, 1],
      translateY: [80, 0],
      translateZ: 0,
      easing: "easeOutQuart",
      duration: 1000,
      delay: anime.stagger(200, { start: delay })
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
      duration: duration
    });
  }

  render() {
    const { state } = this.props;

    let projects = data.projects.map((project, i) => (
      <Link key={i} to={`/case/${project.slug}`} className={"works__project"}>
        <img src={project.mainImage} alt="" />
        <div>
          <span>{`0${i + 1}`}</span>
          <h3>{project.name}/</h3>
        </div>
      </Link>
    ));

    return (
      <div className={`works`} ref={this.ref}>
        <ScrollWrapper state={state}>
          <div className={`works__content`} ref={this.content}>
            <h2>Works/</h2>
            {projects}
          </div>
        </ScrollWrapper>
      </div>
    );
  }
}
