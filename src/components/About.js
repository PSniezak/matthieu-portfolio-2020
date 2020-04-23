import React from "react";
import anime from "animejs";

import { AppContext } from "context/app-context";

import ScrollWrapper from "components/ScrollWrapper";

import { timeline } from "utils/timeline";

import { data } from "data";

export default class About extends React.Component {
  static contextType = AppContext;

  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.bgRef = React.createRef();
    this.overlayRef = React.createRef();
    this.content = React.createRef();
    this.slider = React.createRef();
    this.forward = React.createRef();
    this.backward = React.createRef();

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

  componentDidMount() {
    const { bgRef, content, slider, forward, backward } = this;

    const blockWidth = forward.current.children[0].offsetWidth;
    const blockMargin = window
      .getComputedStyle(forward.current.children[0])
      .getPropertyValue("margin-left");
    const blockTotal = blockWidth + parseInt(blockMargin);

    anime({
      targets: forward.current,
      translateX: `-${blockTotal}px`,
      loop: true,
      duration: 3000,
      easing: "linear",
      direction: "reverse"
    });

    anime({
      targets: backward.current,
      translateX: `-${blockTotal}px`,
      loop: true,
      duration: 3000,
      easing: "linear"
    });
  }

  animateIn(delay = 0) {
    const { transitionDuration } = this.context;
    const { bgRef, content, slider, forward, backward } = this;
    if (this.status === "entering") return;

    this.status = "entering";

    let easing = "easeOutExpo";
    let translateY = ["100%", "0%"];

    timeline({})
      .add({
        targets: bgRef.current,
        translateY: translateY,
        translateZ: 0,
        easing: easing,
        duration: transitionDuration,
        delay
      })
      .add(
        {
          targets: content.current.children,
          opacity: [0, 1],
          translateY: [80, 0],
          easing: easing,
          duration: transitionDuration,
          delay: anime.stagger(100, { start: 200 })
        },
        200
      )
      .add(
        {
          targets: slider.current,
          opacity: [0, 1],
          easing: easing,
          duration: transitionDuration,
          delay: 200
        },
        100
      );
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
          <div className={`about__content`} ref={this.content}>
            <h2>About/</h2>

            <div className={`about__infos`}>
              <h3>
                Motion designer <br /> 2D/3D based in Paris{" "}
              </h3>

              <p>
                Matthieu Tourdes, graduated from HETIC and after one year at 17
                Mars I’m now art director motion as freelancer.
                <br />
                <br />
                During my profesionnal experience, I had the privilege to work
                for famous brands like Mc Donald’s, Bugatti, Citroën...
              </p>

              <ul>
                {data.global.socials.map((social, i) => (
                  <li
                    key={i}
                    style={{ width: `${100 / data.global.socials.length}%` }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.content}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollWrapper>

        <div className={`about__slider`} ref={this.slider}>
          <div>
            <ul ref={this.forward}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul ref={this.backward}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
