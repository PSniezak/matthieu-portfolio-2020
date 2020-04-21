import React from "react";
import { isArray } from "lodash";

const ContentTitleSection = ({ title, content, theme }) => {
  let contentString = content;

  if (isArray(content)) {
    contentString = (
      <ul>
        {content.map(c => {
          return (
            <li>
              <span className="bold">{c.field} : </span>
              {c.url && (
                <a href={c.url} target="_blank">
                  <span>{c.value}</span>
                </a>
              )}
              {!c.url && <span>{c.value}</span>}
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className={`wrapper contentTitle  contentTitle--${theme}`}>
      <div className="divider"></div>
      <div className="flex ">
        <div className="contentTitle__title">
          <h3 className="title title--small">{title}</h3>
        </div>
        <div className="contentTitle__content">
          <p className="text text--small">{contentString}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentTitleSection;
