import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import Vimeo from "@u-wave/react-vimeo";
import Cursor from "./Cursor";

const VideoSection = ({ imgUrl, videoID, setCursor, ...props }) => {
  const video = useRef();
  const image = useRef();

  const [videoVisible, setVideoVisible] = useState(false);

  const showVideo = () => {
    setVideoVisible(true);
    animation(false);
    setCursor(true, "Pause");
  };

  const toggleVideo = () => {
    videoVisible ? hideVideo() : showVideo();
  };

  const hideVideo = () => {
    setVideoVisible(false);
    animation(true);
    setCursor(true, "Play");
  };

  useEffect(() => {
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

  return (
    <div className="videoSection section">
      <div
        className={`videoSection__imageWrapper ${
          videoVisible ? "playing" : "not-playing"
        }`}
        ref={video}
        onClick={toggleVideo}
      >
        <img
          className="videoSection__image"
          src={imgUrl}
          alt="project"
          ref={image}
        />

        <span className="cursor cursor--visible videoSection__play">Play</span>

        <div className={`videoSection__video `}>
          <Vimeo
            id="vimeo"
            video={videoID}
            paused={!videoVisible}
            autoPlay={true}
            onEnd={hideVideo}
            onPause={hideVideo}
            controls={false}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
