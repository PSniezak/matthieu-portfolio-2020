import React from "react";

const ImageSection = ({ image }) => {
  return (
    <div className="imageSection section">
      <img src={image} />
    </div>
  );
};

export default ImageSection;
