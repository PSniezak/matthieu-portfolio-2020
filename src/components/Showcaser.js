import React from "react";
import { Link } from "@reach/router";
import anime from "animejs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppContext } from "context/app-context";

import Holder from "components/Holder";

import { timeline } from "utils/timeline";

import { data } from "data";

export default class Showcaser extends React.Component {
  static contextType = AppContext;

  status = null;
  tl = null;
  timeToHold = 2500;
  holdTimeline = null;
  rowTimeline = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.slider = React.createRef();
    this.titles = data.projects.map(el => {
      return React.createRef();
    });
    this.backgroundVideo = React.createRef();
    this.hold = React.createRef();
    this.holdCircle = React.createRef();

    this.state = {
      current: 0
    };
  }

  componentDidMount() {
    this.check();
    this.init();
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
        this.animateIn(previous && previous === "about" ? 1000 : 400);
      }
    } else {
      if (state === "entered") {
        this.animateIn(0);
      }
    }
  }

  init() {
    document.querySelectorAll(
      ".slick-slide[data-index='0'] a"
    )[0].style.opacity = 1;

    this.holdCircle.current.style.strokeDasharray = Math.PI * 2 * 56;
    this.holdCircle.current.style.strokeDashoffset = Math.PI * 2 * 56;
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

  startHold = (e, loop = false) => {
    console.log("START");
    console.log(loop);

    if (!loop) {
      this.animateRows();
    }

    this.holdTimeline = anime
      .timeline({})
      // Hold Button
      .add(
        {
          targets: this.hold.current,
          scale: 0.85,
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      )
      .add(
        {
          targets: this.holdCircle.current,
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: this.timeToHold,
          easing: "easeOutCubic"
        },
        0
      )
      // Background Video
      .add(
        {
          targets: this.backgroundVideo.current,
          opacity: 0,
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      )
      // Slideshow
      .add(
        {
          targets: document.querySelectorAll(".row"),
          opacity: 1,
          // scale: [1.1, 1],
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      )
      // Titles around
      .add(
        {
          targets: [
            document.querySelectorAll(".slick-slide:not(.slick-current) a")
          ],
          opacity: 1,
          scale: 0.9,
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      )
      // Main Title
      .add(
        {
          targets: [document.querySelectorAll(".slick-slide.slick-current a")],
          scale: 0.9,
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      );
  };

  renderDefaultPosition = () => {
    anime
      // Hold Button
      .timeline({})
      .add(
        {
          targets: this.hold.current,
          scale: 1,
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      )
      .add(
        {
          targets: this.holdCircle.current,
          // opacity: 0,
          strokeDashoffset: anime.setDashoffset,
          duration: this.timeToHold,
          easing: "easeOutCubic"
        },
        0
      )
      // Background Video
      .add(
        {
          targets: this.backgroundVideo.current,
          opacity: 1,
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      )
      .add(
        {
          targets: document.querySelectorAll(".row"),
          opacity: 0,
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      )
      // Titles around
      .add(
        {
          targets: [
            document.querySelectorAll(".slick-slide:not(.slick-current) a")
          ],
          opacity: 0,
          scale: 1,
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      )
      // Main Title
      .add(
        {
          targets: [document.querySelectorAll(".slick-slide.slick-current a")],
          scale: [0.9, 1],
          duration: this.timeToHold / 3,
          easing: "easeOutCubic"
        },
        0
      );
  };

  switchSlides = () => {
    let previous =
      this.state.current === 0
        ? data.projects.length - 1
        : this.state.current - 1;

    anime({
      targets: document.querySelectorAll(`.row img[data-index='${previous}']`),
      opacity: 0,
      easing: "easeOutCubic",
      duration: this.timeToHold / 2
    });

    anime({
      targets: document.querySelectorAll(
        `.row img[data-index='${this.state.current}']`
      ),
      opacity: 1,
      easing: "easeOutCubic",
      duration: this.timeToHold / 2
    });
  };

  animateRows = () => {
    // anime({
    //   targets: document.querySelectorAll(`.row:nth-child(1n)`),
    //   easing: "linear",
    //   duration: this.timeToHold / 4,
    //   translateX: [`150px`, 0],
    //   scale: [1.1, 1],
    //   complete: () => {
    //     anime({
    //       targets: document.querySelectorAll(`.row:nth-child(1n)`),
    //       translateX: [0, `-731px`],
    //       loop: true,
    //       duration: this.timeToHold * 2,
    //       easing: "linear"
    //     });
    //   }
    // });

    // anime({
    //   targets: document.querySelectorAll(`.row:nth-child(2n)`),
    //   easing: "linear",
    //   duration: this.timeToHold / 4,
    //   translateX: [`-150px`, 0],
    //   scale: [1.1, 1],
    //   complete: () => {
    //     anime({
    //       targets: document.querySelectorAll(`.row:nth-child(2n)`),
    //       translateX: [0, `731px`],
    //       loop: true,
    //       duration: this.timeToHold * 2,
    //       easing: "linear"
    //     });
    //   }
    // });

    // anime({
    //   targets: document.querySelectorAll(`.row:nth-child(1n)`),
    //   easing: "linear",
    //   scale: {
    //     value: [1.1, 1],
    //     duration: this.timeToHold / 4
    //   },
    //   translateX: {
    //     value: [0, `-731px`],
    //     loop: true,
    //     duration: this.timeToHold * 2
    //   }
    // });

    // anime({
    //   targets: document.querySelectorAll(`.row:nth-child(2n)`),
    //   easing: "linear",
    //   scale: {
    //     value: [1.1, 1],
    //     duration: this.timeToHold / 4
    //   },
    //   translateX: {
    //     value: [0, `731px`],
    //     loop: true,
    //     duration: this.timeToHold * 2
    //   }
    // });

    anime({
      targets: document.querySelectorAll(`.row:nth-child(1n)`),
      translateX: [0, `-731px`],
      loop: true,
      duration: this.timeToHold * 2,
      easing: "linear"
    });
    anime({
      targets: document.querySelectorAll(`.row:nth-child(2n)`),
      translateX: [0, `731px`],
      loop: true,
      duration: this.timeToHold * 2,
      easing: "linear"
    });
  };

  endHold = (e, enough) => {
    if (enough) {
      console.log("Released after enough time");
      this.renderDefaultPosition();
    } else {
      this.holdTimeline.reverse();
      console.log("Released too soon");
    }
  };

  onHolder = e => {
    console.log("triggered");
    let current =
      this.state.current === data.projects.length - 1
        ? 0
        : this.state.current + 1;
    this.setState({ current });
    this.switchSlides();
    this.slider.slickNext();
    this.startHold(e, true);
  };

  render() {
    let { current } = this.state;
    let settings = {
      dots: false,
      infinite: true,
      speed: this.timeToHold / 2,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      accessibility: false,
      arrows: false,
      centerPadding: "0px",
      draggable: false,
      swipe: false,
      touchMove: false,
      useCSS: true,
      useTransform: true
    };

    const slideshows = (
      <div>
        <div className={"row"}>
          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[1]} alt="" />
            ))}
          </div>

          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[2]} alt="" />
            ))}
          </div>

          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[0]} alt="" />
            ))}
          </div>
        </div>
        <div className={"row"}>
          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[0]} alt="" />
            ))}
          </div>

          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[1]} alt="" />
            ))}
          </div>

          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[2]} alt="" />
            ))}
          </div>
        </div>
        <div className={"row"}>
          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[3]} alt="" />
            ))}
          </div>

          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[4]} alt="" />
            ))}
          </div>

          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[5]} alt="" />
            ))}
          </div>
        </div>
        <div className={"row"}>
          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[4]} alt="" />
            ))}
          </div>

          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[5]} alt="" />
            ))}
          </div>

          <div>
            {data.projects.map((project, i) => (
              <img key={i} data-index={i} src={project.slideshow[3]} alt="" />
            ))}
          </div>
        </div>
      </div>
    );

    return (
      <div className={`showcaser`} ref={this.ref}>
        <div className={`showcaser__slider`}>
          <div className={`showcaser__slider__titles`}>
            <Slider {...settings} ref={ref => (this.slider = ref)}>
              {data.projects.map((project, i) => {
                return (
                  <Link
                    to={`/case/${project.slug}`}
                    key={i}
                    ref={this.titles[i]}
                  >
                    <span>{`0${i + 1}`}</span>
                    <h2 data-title={`${project.name}/`}>{project.name}/</h2>
                  </Link>
                );
              })}
            </Slider>
          </div>
          <div
            className={`showcaser__slider__background`}
            ref={this.backgroundVideo}
          >
            <video
              src={data.projects[current].mainVideo}
              type={"video/mp4"}
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className={`showcaser__slider__slideshow`}>{slideshows}</div>
        </div>
        <div className={`showcaser__nav`}>
          <Holder
            time={this.timeToHold / 1000}
            onStart={this.startHold}
            onHolder={this.onHolder}
            onEnd={this.endHold}
            setRef={this.hold}
          >
            <span>
              Hold <br /> to navigate
            </span>
            <svg height="120" width="120">
              <circle cx="60" cy="60" r="56" strokeWidth="2" fillOpacity="0" />
            </svg>
            <svg height="120" width="120">
              <circle
                cx="60"
                cy="60"
                r="56"
                strokeWidth="2"
                fillOpacity="0"
                ref={this.holdCircle}
              />
            </svg>
          </Holder>
        </div>
      </div>
    );
  }
}
