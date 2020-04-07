import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { AppContext } from "context/app-context";

import { isMobile } from "utils/is-mobile";

class TransitionRouter extends React.Component {
  static contextType = AppContext;

  componentDidUpdate(prevProps) {
    const { location, onLocationChange } = this.props;

    if (prevProps.location !== location) {
      if (isMobile) {
        window.scrollTo(0, 0);
      }

      if (onLocationChange) {
        onLocationChange(
          this.getFirstSegment(prevProps.location.pathname),
          this.getFirstSegment(location.pathname),
          this.getSecondSegment(location.pathname)
        );
      }
    }
  }

  componentDidMount() {
    const { location, onLocationChange } = this.props;
    if (onLocationChange) {
      onLocationChange(
        null,
        this.getFirstSegment(location.pathname),
        this.getSecondSegment(location.pathname)
      );
    }
  }

  getFirstSegment = (pathname, defaultSegment = "home") => {
    return pathname && pathname !== "/"
      ? pathname.split("/")[1]
      : defaultSegment;
  };

  getSecondSegment = (pathname, defaultSegment = null) => {
    return pathname && pathname !== "/"
      ? pathname.split("/")[2]
      : defaultSegment;
  };

  render() {
    const {
      onLocationChange,
      children,
      location,
      className,
      ...rest
    } = this.props;
    const { transitionDuration } = this.context;

    let element = (
      <React.Fragment key={location.pathname}>
        {children("entered")}
      </React.Fragment>
    );

    if (!isMobile) {
      element = (
        <TransitionGroup className={className}>
          <CSSTransition
            key={location.pathname}
            timeout={transitionDuration}
            {...rest}
          >
            {state => children(state)}
          </CSSTransition>
        </TransitionGroup>
      );
    }

    return element;
  }
}

export default TransitionRouter;
