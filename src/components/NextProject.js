import React from "react";
import { Link } from "@reach/router";

const NextProject = ({ name, index, slug, setCursor }) => {
  return (
    <Link
      to={`/case/${slug}`}
      key={index}
      style={{ display: "block" }}
      className="nextProject section with-cursor"
      onMouseEnter={() => setCursor(true, "Next", "black")}
      onMouseLeave={() => setCursor(false, "")}
    >
      <div>
        <div className="wrapper">
          <h2 className="mainTitle">
            <span className="nextProject__number">
              {index < 10 && "0"}
              {index}
            </span>
            {name}/
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default NextProject;
