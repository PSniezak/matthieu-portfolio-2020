import React from "react";
import Cursor from "./Cursor";

const ContentSection = ({ content }) => {
  return (
    <div>
      <div className="contentSection section wrapper wrapper--small ">
        <p className="text text--large">{content}</p>
      </div>
    </div>
  );
};

export default ContentSection;
