import React, { useRef } from "react";
import BlockSlider from "./BlockSlider";

const ContentSection = ({ content, theme }) => {
  const slider = useRef();
  const forward = useRef();
  const backward = useRef();

  return (
    <div
      className={`contentSectionWrapper wrapper ${
        theme === "red" ? "wrapper--right" : ""
      } contentSectionWrapper--${theme}`}
    >
      <div className="contentSection section wrapper wrapper--small ">
        <p className="text text--large">{content}</p>
      </div>

      {theme === "red" && (
        <div className="sliderWrapper contentSection__slider">
          <BlockSlider />
        </div>
      )}
    </div>
  );
};

export default ContentSection;
