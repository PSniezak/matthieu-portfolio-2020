import React from "react";

const Cursor = ({ text, x, y, visible, color }) => {
  return (
    <div
      className={`cursor ${visible ? "cursor--visible" : ""} cursor--${color}`}
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
    >
      {text}
    </div>
  );
};

export default Cursor;
