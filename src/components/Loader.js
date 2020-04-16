import React from "react";
import anime from "animejs";

import { AppContext } from "context/app-context";

import { data } from "data";

export default class Loader extends React.Component {
  static contextType = AppContext;

  loaded = 0;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.forward = React.createRef();
    this.backward = React.createRef();

    console.log("-- Generating image list --");
    let images = [];

    data.projects.forEach(el => {
      images.push(el.mainImage);

      images = images.concat(el.slideshow);
    });

    console.log("-- Generating video list --");
    let videos = data.projects.map(el => `${el.mainVideo}`);

    this.state = {
      images,
      videos,
      toLoad: videos.length + images.length
    };
  }

  componentDidMount() {
    this.animate(0);
  }

  animate() {
    let { forward, backward } = this;

    const blockWidth = forward.current.children[0].offsetWidth;
    const blockMargin = window
      .getComputedStyle(forward.current.children[0])
      .getPropertyValue("margin-left");
    const blockTotal = blockWidth + parseInt(blockMargin);

    anime({
      targets: forward.current,
      easing: "easeInQuart",
      duration: 1500,
      translateX: [`-${blockTotal * 7}px`, 0],
      complete: () => {
        anime({
          targets: forward.current,
          translateX: `-${blockTotal}px`,
          loop: true,
          duration: 3000,
          easing: "linear",
          direction: "reverse"
        });
      }
    });

    anime({
      targets: backward.current,
      easing: "easeInQuart",
      duration: 1500,
      translateX: [`${blockTotal * 7}px`, 0],
      complete: () => {
        anime({
          targets: backward.current,
          translateX: `-${blockTotal}px`,
          loop: true,
          duration: 3000,
          easing: "linear"
        });
      }
    });
  }

  animateOut() {
    const { finishLoader } = this.props;

    anime({
      targets: this.ref.current,
      opacity: [1, 0],
      scale: [1, 1.1],
      duration: 800,
      easing: "easeOutQuart",
      delay: 3000,
      complete: function(anim) {
        finishLoader();
      }
    });
  }

  loadingProgress = (src, index) => {
    console.log(`${src} at position ${index} has been loaded`);
    this.loaded += 1;

    if (this.loaded === this.state.toLoad) {
      console.log("-- Loading finished, proceeding --");
      this.animateOut();
    }
  };

  render() {
    const imageList = this.state.images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={""}
        onLoad={() => this.loadingProgress(image, index)}
      />
    ));
    const videoList = this.state.videos.map((video, index) => (
      <video
        key={index}
        src={video}
        type={"video/mp4"}
        autoPlay
        muted
        onCanPlay={() => this.loadingProgress(video, index)}
      ></video>
    ));

    return (
      <React.Fragment>
        <div className={`loader`} ref={this.ref}>
          <div className={`loader__content`}>
            <ul ref={this.forward}>
              <li></li>
              <li></li>
              <li></li>
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
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div style={{ display: "none" }}>
          {imageList}
          {videoList}
          <p style={{ fontFamily: "MonumentExtended" }}>Monument</p>
          <p style={{ fontFamily: "Authenia" }}>Authenia</p>
          <p style={{ fontFamily: "Apercu" }}>Apercu</p>
        </div>
      </React.Fragment>
    );
  }
}
