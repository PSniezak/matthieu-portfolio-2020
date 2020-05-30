import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../context/app-context";
import Parallax from "./Parallax";

const ImagesParallax = ({ images, title }) => {
  const context = useContext(AppContext);

  const scrollRef = useRef();

  const speed = [1, 10, 1, 3, 2, 1];

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
        <h2 className="imagesParallaxWrapper__title title title--medium center">
          {title}
        </h2>
      </div>
      <div className="imagesParallax">
        {images.map((image, index) => {
          return (
            <Parallax
              className="imagesParallax__image"
              key={`parallax_${index}`}
              min={((images.length - index) % 6) * 20}
              max={((images.length - index) % 6) * 150}
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
