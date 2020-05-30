import React from "react";

const ImageSection = ({ image, hint }) => {
  return (
    <div className="imageSection section">
      <img src={image} />
      {hint && (
        <div className="wrapper imageSection__hint">
          <span>{hint}</span>
        </div>
      )}
    </div>
  );
};

export default ImageSection;
