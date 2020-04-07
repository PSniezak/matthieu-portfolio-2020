import React from "react";
import { af as AF } from "@gladeye/af";

import { AppContext } from "context/app-context";
import { isMobile } from "utils/is-mobile";
import { w } from "utils/w";
import { clamp, round } from "utils";

class ScrollWrapper extends React.Component {
  static contextType = AppContext;

  scrollDest = 0;
  y = 0;

  min = 0;
  max = 0;

  constructor(props) {
    super(props);

    this.af = AF();
    this.w = w();

    this.ref = React.createRef();
  }

  componentDidMount() {
    if (!isMobile) {
      this.af.addWrite(this.write);
      this.af.addRead(this.read);
    }
  }

  componentWillUnmount() {
    if (!isMobile) {
      this.af.removeWrite(this.write);
      this.af.removeRead(this.read);
    }
  }

  read = () => {
    const { speedY } = this.context;
    const { state } = this.props;
    if (state === "entering") return;
    this.rect = this.ref.current.getBoundingClientRect();
    this.min = Math.ceil(this.w.h - this.rect.height);
    this.scrollDest = clamp(this.scrollDest + speedY, this.min, this.max);
  };

  write = () => {
    const { state } = this.props;
    if (state === "entering") return;

    if (Math.abs(this.scrollDest - this.y) < 0.2) {
      if (this.y % 1 !== 0) {
        this.y = Math.round(this.y);
        this.scrollDest = this.y;
        this.ref.current.style.transform = `translate3d(0, ${this.y}px, 0)`;
      }
      return;
    }

    this.y += (this.scrollDest - this.y) * 0.1;
    this.y = round(this.y, 1000);

    this.ref.current.style.transform = `translate3d(0, ${this.y}px, 0)`;
  };

  render() {
    return (
      <div
        className={`scroll-wrapper`}
        style={{ backfaceVisibility: "hidden" }}
        ref={this.ref}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ScrollWrapper;
