import React from "react";
import { Link } from "@reach/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppContext } from "context/app-context";

import { timeline } from "utils/timeline";

import { data } from "data";

export default class MobileShowcaser extends React.Component {
  static contextType = AppContext;

  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      current: 0
    };
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
    let { current } = this.state;
    let { projects } = data;

    let settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      accessibility: false,
      arrows: false,
      centerPadding: "0px",
      useCSS: true,
      useTransform: true
    };

    return (
      <div className={`mobileshowcaser`} ref={this.ref}>
        <Slider {...settings} className={`mobileshowcaser__slider`}>
          {projects.map((project, i) => {
            return (
              <div className={`mobileshowcaser__slider__slide`} key={i}>
                <img src={project.mainImage} alt="" />
                <div>
                  <span>{`0${i + 1}`}</span>
                  <h2 data-title={`${project.name}/`}>{project.name}/</h2>
                </div>
              </div>
            );
          })}
        </Slider>
        <Link
          className={"mobileshowcaser__link"}
          to={`/case/${projects[current].slug}`}
        >
          See project
        </Link>
      </div>
    );
  }
}
