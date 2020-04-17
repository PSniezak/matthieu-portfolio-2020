import React from "react";
import anime from "animejs";
import WebFont from "webfontloader";

import { AppContext } from "context/app-context";

import { data } from "data";

export default class Loader extends React.Component {
  static contextType = AppContext;

  mediaLoaded = 0;
  fontsLoaded = false;

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
      videos
    };
  }

  componentDidMount() {
    this.loadFonts();
    this.animate();
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

  loadFonts = () => {
    WebFont.load({
      custom: {
        families: ["Apercu:n4,n7", "Authenia:n4", "MonumentExtended:n4,n9"]
      },
      loading: () => {
        console.log(`loading custom webftons`);
      },
      active: () => {
        console.log("webfonts active");
        this.fontsLoaded = true;
        this.finishLoading();
      }
    });
  };

  loadingProgress = (media, index) => {
    console.log(`${media} at position ${index} has been loaded`);
    this.mediaLoaded += 1;

    this.finishLoading();
  };

  finishLoading = () => {
    if (
      this.mediaLoaded ===
        this.state.images.length + this.state.videos.length &&
      this.fontsLoaded === true
    ) {
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
        muted={true}
        autoPlay={true}
        preload={"auto"}
        onCanPlayThrough={() => this.loadingProgress(video, index)}
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
        </div>
      </React.Fragment>
    );
  }
}
