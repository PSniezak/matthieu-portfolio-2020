import React, { Component } from "react";

export default class Holder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holding: false,
      start: 0,
      ended: "begin",
      clickEvent: null
    };

    this._timer = null;
    this._unmounted = false;

    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
    this.interval = this.interval.bind(this);
    this.clickCapture = this.clickCapture.bind(this);
  }

  componentWillUnmount() {
    this._unmounted = true;
    clearInterval(this._timer);
    this._timer = null;
  }

  start(e) {
    let ended = this.state.ended;
    let start = Date.now();
    let eCopy = Object.assign({}, e);
    eCopy.type = "Holder";
    this.setState({
      start: start,
      holding: true,
      ended: false,
      clickEvent: eCopy,
      isEnough: false
    });
    let rightNumber = this.props.time && this.props.time > 0;
    let time = rightNumber ? this.props.time : 2;

    if (ended) {
      this._timer = setInterval(
        function() {
          this.interval(start);
        }.bind(this),
        time * 1000 + 1
      );
    }
    if (this.props.onStart) {
      this.props.onStart(e);
    }
    document.documentElement.addEventListener("mouseup", this.end);
  }

  end(e) {
    document.documentElement.removeEventListener("mouseup", this.end);
    if (this.state.ended || this._unmounted) {
      return false;
    }
    let endTime = Date.now();
    let minDiff = this.props.time * 1000;
    let startTime = this.state.start;
    let diff = endTime - startTime;
    let isEnough = diff >= minDiff;

    this.setState({
      holding: false,
      ended: true,
      clickEvent: null,
      isEnough: isEnough
    });
    if (this.props.onEnd) {
      this.props.onEnd(e, isEnough);
    }
  }

  clickCapture(e) {
    if (this.state.isEnough) e.stopPropagation();
  }

  interval(start) {
    if (!this.state.ended && start === this.state.start) {
      if (this.props.onHolder) {
        this.props.onHolder(start, this.state.clickEvent);
        this.setState({ holding: false });
        return;
      }
    }
  }

  render() {
    let classList = this.props.className ? this.props.className + " " : " ";
    classList += this.state.holding ? "holder_holding " : "";
    classList += this.state.ended ? "holder_ended " : "";

    return (
      <div
        style={this.props.style}
        className={classList}
        onMouseDown={this.start}
        onTouchStart={this.start}
        onMouseUp={this.end}
        onClickCapture={this.clickCapture}
        onTouchCancel={this.end}
        onTouchEnd={this.end}
        ref={this.props.setRef}
      >
        {this.props.children}
      </div>
    );
  }
}
