import React from "react";

const ContentTitleSection = ({ title, content }) => {
  return (
    <div className="contentTitle flex wrapper">
      <div className="contentTitle__Title">
        <h3 className="title title--small">{title}</h3>
      </div>
      <div className="contentTitle__Content">
        <p className="text text--small">{content}</p>
      </div>
    </div>
  );
};

export default ContentTitleSection;
