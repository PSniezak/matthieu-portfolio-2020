import React from "react";

const ContentSection = ({ content }) => {
  return (
    <div className="contentSection section wrapper wrapper--small ">
      <p className="text text--large">{content}</p>
    </div>
  );
};

export default ContentSection;
