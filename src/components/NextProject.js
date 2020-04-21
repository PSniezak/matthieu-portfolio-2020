import React from "react";
import { Link } from "@reach/router";

const NextProject = ({ name, index, slug, setCursor }) => {
  return (
    <div
      className="nextProject section with-cursor"
      onMouseEnter={() => setCursor(true, "Next", "black")}
      onMouseLeave={() => setCursor(false, "")}
    >
      <div className="wrapper">
        <Link to={`/case/${slug}`} key={index}>
          <span className="nextProject__number">
            {index < 10 && "0"}
            {index}
          </span>
          <h2 className="mainTitle">{name}/</h2>
        </Link>
      </div>
    </div>
  );
};

export default NextProject;
