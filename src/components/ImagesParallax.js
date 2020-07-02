import React, { useContext, useRef, useEffect, useState } from "react";
import { AppContext } from "../context/app-context";
import Parallax from "./Parallax";
import { isMobile } from "../utils/is-mobile";

const ImagesParallax = ({ images, title, title2 }) => {
  const mobile = isMobile;
  const context = useContext(AppContext);
  const [title1visible, setTitle1visible] = useState(true);
  const [title2visible, setTitle2visible] = useState(mobile);
  const scrollRef = useRef();

  return (
    <div className="imagesParallaxWrapper section">
      <div
        className="wrapper imagesParallaxTitle"
        // data-scroll-target=".imagesParallaxWrapper"
        // data-scroll-sticky
        // data-scroll
        // data-scroll-speed={-3}
        // data-scroll-offset={"-1000, 0"}
      >
        <Parallax
          className=""
          min={-90}
          max={0}
          action={percent => {
            if (!mobile) {
              if (percent > 0.8) {
                setTitle1visible(false);
                setTimeout(() => {
                  setTitle2visible(true);
                }, 300);
              } else {
                setTitle2visible(false);
                setTimeout(() => {
                  setTitle1visible(true);
                }, 300);
              }
            }
          }}
        >
          <h2
            className={`imagesParallaxWrapper__title title title--medium center imagesParallaxWrapper__title--${
              mobile ? "mobile" : "desktop"
            }`}
          >
            <span
              className={`textAnim ${
                title1visible ? "text--visible" : "text--hidden"
              }`}
            >
              {title}
            </span>
            <span
              className={`textAnim ${
                title2visible ? "text--visible" : "text--hidden"
              }`}
            >
              {title2}
            </span>
          </h2>
        </Parallax>
      </div>
      <div className="imagesParallax">
        {images.map((image, index) => {
          return (
            <Parallax
              className="imagesParallax__image"
              key={`parallax_${index}`}
              min={(((images.length - index) % 6) + 2) * 20}
              max={(((images.length - index) % 6) - 1) * 150}
            >
              <div>
                <img src={image} />
              </div>
            </Parallax>
            // <div
            //   key={`parallax_${index}`}
            //   data-scroll
            //   data-scroll-speed={speed[index]}
            //   data-scroll-offset={"-1000, 0"}
            //   className="imagesParallax__image"
            // >
            //   <div>
            //     {/* <span className="colored-white">{index}</span> */}
            //     <img src={image} />
            //   </div>
            // </div>
          );
        })}
      </div>

      {/* <div style={{ height: 1200 }}></div> */}
    </div>
  );
};

export default ImagesParallax;

// const maxs = [100, 100, 100, 100, 100, 100];
// const mins = [-200, -400, -300, -200, -100, 0];

//  <Parallax
//    max={maxs[index]}
//    min={mins[index]}
//    key={`slider_${index}`}
//    className="imagesParallax__image"
//    style={{ marginBottom: -maxs[index] + "px" }}
//  >
//    <span className="colored-white">{index}</span>
//    <img src={image} />
//  </Parallax>;
