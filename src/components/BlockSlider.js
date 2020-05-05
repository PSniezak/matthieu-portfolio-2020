import React, { useRef, useEffect } from "react";
import anime from "animejs";
import { timeline } from "utils/timeline";

const BlockSlider = ({ content, theme }) => {
  const slider = useRef();
  const forward = useRef();
  const backward = useRef();

  useEffect(() => {
    const blockWidth = forward.current.children[0].offsetWidth;
    const blockMargin = window
      .getComputedStyle(forward.current.children[0])
      .getPropertyValue("margin-left");
    const blockTotal = blockWidth + parseInt(blockMargin);

    anime({
      targets: forward.current,
      translateX: `-${blockTotal}px`,
      loop: true,
      duration: 4000,
      easing: "linear",
      direction: "reverse"
    });

    anime({
      targets: backward.current,
      translateX: `-${blockTotal}px`,
      loop: true,
      duration: 4000,
      easing: "linear"
    });
  }, []);

  return (
    <div className={`slider`} ref={slider}>
      <div>
        <ul ref={forward}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul ref={backward}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default BlockSlider;
