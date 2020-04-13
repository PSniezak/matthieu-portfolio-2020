import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import Vimeo from "@u-wave/react-vimeo";

const VideoSection = ({ imgUrl, videoID }) => {
  const ratio = 16 / 9;
  const video = useRef();
  const image = useRef();

  const [width, setWidth] = useState("100%");
  const [videoVisible, setVideoVisible] = useState(false);
  const [height, setHeight] = useState(700 / ratio);

  const showVideo = () => {
    setVideoSize();
    setVideoVisible(true);
    animation(false);
  };

  const hideVideo = () => {
    setVideoVisible(false);
    animation(true);
  };

  useEffect(() => {
    setVideoSize();
    if (videoVisible) {
      animation(false);
    } else {
      animation(true);
    }
  }, [videoVisible]);

  const animation = reverse => {
    anime({
      targets: ".videoSection__image",
      opacity: reverse ? 1 : 0,
      easing: "easeInOutQuad"
    });

    anime({
      targets: ".videoSection__video",
      opacity: reverse ? 0 : 1,
      easing: "easeInOutQuad"
      //   begin: function() {
      //     document.querySelector(
      //       ".videoSection__video #vimeo"
      //     ).style.display = reverse ? "block" : "block";
      //   },
      //   end: function() {
      //     document.querySelector(
      //       ".videoSection__video #vimeo"
      //     ).style.display = reverse ? "block" : "block";
      //   },
    });
  };

  const setVideoSize = () => {
    const videoWidth = video.current.offsetWidth;
    const maxHeight = image.current.offsetHeight;
    const minHeigth = 350;
    const newHeight = videoWidth / ratio;
    if (newHeight > maxHeight) {
      console.log(maxHeight * ratio);
      setWidth(maxHeight * ratio);
      setHeight(maxHeight);
    } else if (newHeight < minHeigth) {
      setWidth(minHeigth * ratio);
      setHeight(minHeigth);
    } else {
      setWidth(videoWidth);
      setHeight(videoWidth / ratio);
    }
  };

  useEffect(() => {
    setVideoSize();
    window.addEventListener("resize", setVideoSize);
    return () => {
      window.removeEventListener("resize", setVideoSize);
    };
  }, [video, image.current]);

  return (
    <div className="videoSection section">
      <div
        className={`videoSection__imageWrapper ${
          videoVisible ? "playing" : "not-playing"
        }`}
        ref={video}
        onClick={showVideo}
      >
        <img
          className="videoSection__image"
          src={imgUrl}
          alt="project"
          ref={image}
        />

        <div className={`videoSection__video `}>
          <Vimeo
            id="vimeo"
            video={videoID}
            paused={!videoVisible}
            autoPlay={true}
            onEnd={hideVideo}
            onPause={hideVideo}
            controls={false}
            width={`${width}px`}
            height={`${height}px`}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
