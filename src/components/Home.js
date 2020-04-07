import React from "react";

import { AppContext } from "context/app-context";

import Loader from "components/Loader";
import Showcaser from "components/Showcaser";
import MobileShowcaser from "components/MobileShowcaser";

import { isMobile } from "utils/is-mobile";

export default class Home extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { loaderActive } = this.context;
    const { previous } = this.context.location;
    const { state, finishLoader } = this.props;

    const showcaser = isMobile ? (
      <MobileShowcaser state={state} />
    ) : (
      <Showcaser state={state} />
    );

    return (
      <div className={`home`}>
        {!previous && loaderActive ? (
          <Loader finishLoader={finishLoader} />
        ) : (
          showcaser
        )}
      </div>
    );
  }
}
