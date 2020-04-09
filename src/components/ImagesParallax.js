import React, { useContext } from "react";
import { AppContext } from "../context/app-context";
import Parallax from "./Parallax";

const ImagesParallax = ({ images, title }) => {
  const context = useContext(AppContext);

  const maxs = [100, 100, 100, 100, 100, 100];
  const mins = [-200, -400, -300, -200, -100, 0];

  return (
    <div className="imagesParallaxWrapper section">
      <div className="wrapper  ">
        <h2 className="imagesParallaxWrapper__title title title--medium center">
          {title}
        </h2>
      </div>
      <div className="imagesParallax">
        {images.map((image, index) => {
          return (
            <Parallax
              max={maxs[index]}
              min={mins[index]}
              key={`slider_${index}`}
              className="imagesParallax__image"
              style={{ marginBottom: -maxs[index] + "px" }}
            >
              <span className="colored-white">{index}</span>
              <img src={image} />
            </Parallax>
          );
        })}
      </div>

      {/* <div style={{ height: 1200 }}></div> */}
    </div>
  );
};

export default ImagesParallax;
