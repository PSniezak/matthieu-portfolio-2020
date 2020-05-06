import React from "react";
import { Link } from "@reach/router";
import anime from "animejs";
import ReactCursorPosition from "react-cursor-position";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppContext } from "context/app-context";

import Holder from "components/Holder";
import Cursor from "components/Cursor";

import { timeline } from "utils/timeline";

import { data } from "data";

export default class Showcaser extends React.Component {
  static contextType = AppContext;

  status = null;
  tl = null;
  timeToHold = 2500;
  holdTimeline = null;
  rowTimeline = null;
  renderingDefault = false;

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

    this.forwards = [React.createRef(), React.createRef()];
    this.backwards = [React.createRef(), React.createRef()];

    this.state = {
      current: 0,
      cursorVisible: false,
      cursorContent: "",
      cursorColor: "red"
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
        console.log("home content");
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

  init() {
    document.querySelectorAll(
      ".slick-slide[data-index='0'] a"
    )[0].style.opacity = 1;

    this.holdCircle.current.style.strokeDasharray = Math.PI * 2 * 52;
    this.holdCircle.current.style.strokeDashoffset = Math.PI * 2 * 52;
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

    console.log("exit home");

    this.status = "exiting";

    let duration = transitionDuration;

    timeline({}).add({
      targets: this.ref.current.children,
      opacity: [1, 0],
      easing: "easeInOutQuart",
      duration: duration
    });
  }

  startHold = (e, loop = false) => {
    // console.log("START");
    // console.log(loop);

    if (this.renderingDefault) {
      // console.log("truing return");
      return;
    }

    if (this.holdTimeline && !this.holdTimeline.completed && !loop) {
      // console.log("try to replay");
      this.animateRows(false);
      this.holdTimeline.reverse();
      this.holdTimeline.play();
    } else {
      if (!loop) {
        this.animateRows(false);
      } else {
        this.animateRows(true);
      }

      this.holdTimeline = anime
        .timeline({})
        // Hold Button
        .add(
          {
            targets: this.hold.current,
            scale: loop ? 0.9 : [1, 0.9],
            duration: this.timeToHold / 3,
            easing: "easeOutCubic"
          },
          0
        )
        .add(
          {
            targets: this.holdCircle.current,
            strokeDashoffset: [anime.setDashoffset, 0],
            // strokeDasharray: loop ? [anime.setDashoffset, 0] : 0,
            duration: this.timeToHold,
            easing: "easeOutCubic"
          },
          0
        )
        // Background Video
        .add(
          {
            targets: this.backgroundVideo.current,
            opacity: loop ? 0 : [1, 0],
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
            opacity: loop ? 1 : [0, 1],
            scale: loop ? 0.9 : [1, 0.9],
            duration: this.timeToHold / 3,
            easing: "easeOutCubic"
          },
          0
        )
        // Main Title
        .add(
          {
            targets: [
              document.querySelectorAll(".slick-slide.slick-current a")
            ],
            scale: loop ? 0.9 : [1, 0.9],
            duration: this.timeToHold / 3,
            easing: "easeOutCubic"
          },
          0
        );
    }
  };

  renderDefaultPosition = () => {
    this.renderingDefault = true;

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
          easing: "easeOutCubic",
          complete: () => {
            this.renderingDefault = false;
          }
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
      duration: this.timeToHold / 4
    });

    anime({
      targets: document.querySelectorAll(
        `.row img[data-index='${this.state.current}']`
      ),
      opacity: 1,
      easing: "easeOutCubic",
      duration: this.timeToHold / 4
    });
  };

  animateRows = (loop = false) => {
    if (loop) {
      this.rowTimeline.finished.then(() => {
        // console.log("finished");
        anime({
          targets: document.querySelectorAll(`.row:nth-child(1n)`),
          translateX: [0, `-731px`],
          duration: this.timeToHold * 2,
          loop: true,
          easing: "linear"
        });
        anime({
          targets: document.querySelectorAll(`.row:nth-child(2n)`),
          translateX: [0, `731px`],
          duration: this.timeToHold * 2,
          loop: true,
          easing: "linear"
        });
      });
    } else {
      if (this.rowTimeline && !this.rowTimeline.completed) {
        this.rowTimeline.reverse();
        this.rowTimeline.play();
      } else {
        this.rowTimeline = anime
          .timeline({
            // loop: true
          })
          .add(
            {
              targets: document.querySelectorAll(`.row[data-index='1']`),
              easing: "linear",
              opacity: {
                value: [0, 1],
                duration: this.timeToHold / 4,
                easing: "easeInQuad"
              },
              scale: {
                value: [1.06, 1],
                duration: this.timeToHold / 4,
                easing: "easeInQuad"
              },
              translateX: [
                {
                  value: ["50px", "-150px"],
                  duration: this.timeToHold / 4,
                  easing: "easeInQuad"
                },
                {
                  value: ["-150px", `-731px`],
                  duration: this.timeToHold * 2 - this.timeToHold / 4
                }
              ]
            },
            0
          )
          .add(
            {
              targets: document.querySelectorAll(`.row[data-index='2']`),
              easing: "linear",
              opacity: {
                value: [0, 1],
                duration: this.timeToHold / 4,
                easing: "easeInQuad"
              },
              scale: {
                value: [1.06, 1],
                duration: this.timeToHold / 4,
                easing: "easeInQuad"
              },
              translateX: [
                {
                  value: ["-50px", "150px"],
                  duration: this.timeToHold / 4,
                  easing: "easeInQuad"
                },
                {
                  value: ["150px", `731px`],
                  duration: this.timeToHold * 2 - this.timeToHold / 4
                }
              ]
            },
            0
          );
      }
    }
  };

  endHold = (e, enough) => {
    if (this.renderingDefault) {
      // console.log("truing return");
      return;
    }

    if (enough) {
      // console.log("Released after enough time");
      this.renderDefaultPosition();
    } else {
      this.holdTimeline.reverse();
      this.rowTimeline.reverse();
      // console.log("Released too soon");
    }
  };

  onHolder = e => {
    // console.log("triggered");
    let current =
      this.state.current === data.projects.length - 1
        ? 0
        : this.state.current + 1;
    this.setState({ current });
    this.switchSlides();
    this.slider.slickNext();
    this.startHold(e, true);
  };

  setCursor = (visible, text, color = "red") => {
    this.setState({
      cursorVisible: visible,
      cursorContent: text,
      cursorColor: color
    });
  };

  render() {
    let {
      current,
      cursorContent,
      cursorVisible,
      cursorColor,
      position
    } = this.state;

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
      useTransform: true,
      beforeChange: (prevSlide, nextSlide) => {
        if (nextSlide === 0) {
          document
            .querySelectorAll(".slick-center + .slick-cloned")
            .forEach(nextSlide => {
              setTimeout(() =>
                nextSlide.classList.add("slick-current", "slick-center")
              );
            });
        }
      }
    };

    const slideshows = (
      <div>
        <div className={"row"} data-index="1">
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
        <div className={"row"} data-index="2">
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
        <div className={"row"} data-index="1">
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
        <div className={"row"} data-index="2">
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
      <Holder
        time={this.timeToHold / 1000}
        onStart={this.startHold}
        onHolder={this.onHolder}
        onEnd={this.endHold}
      >
        <ReactCursorPosition onPositionChanged={props => this.setState(props)}>
          <Cursor
            {...position}
            visible={cursorVisible}
            text={cursorContent}
            color={cursorColor}
          />
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
                        onClick={e => e.stopPropagation()}
                        onMouseEnter={() => this.setCursor(true, "See project")}
                        onMouseLeave={() => this.setCursor(false, "")}
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
                {data.projects[current].mainVideo ? (
                  <video
                    src={data.projects[current].mainVideo}
                    type={"video/mp4"}
                    autoPlay
                    loop
                    muted
                  ></video>
                ) : (
                  <img src={data.projects[current].mainImage} alt="" />
                )}
              </div>
              <div className={`showcaser__slider__slideshow`}>{slideshows}</div>
            </div>
            <div className={`showcaser__nav`}>
              <div ref={this.hold}>
                <span>
                  Hold <br /> to navigate
                </span>
                <svg height="108" width="108">
                  <circle
                    cx="54"
                    cy="54"
                    r="52"
                    strokeWidth="2"
                    fillOpacity="0"
                  />
                </svg>
                <svg height="108" width="108">
                  <circle
                    cx="54"
                    cy="54"
                    r="52"
                    strokeWidth="2"
                    fillOpacity="0"
                    ref={this.holdCircle}
                  />
                </svg>
              </div>
            </div>
          </div>
        </ReactCursorPosition>
      </Holder>
    );
  }
}
