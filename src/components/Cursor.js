import React from "react";

const Cursor = ({ text, x, y, visible }) => {
  return (
    <div
      className={`cursor ${visible ? "cursor--visible" : ""}`}
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
    >
      {text}
    </div>
  );
};

export default Cursor;
