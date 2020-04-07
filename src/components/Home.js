import React from "react";

import { AppContext } from "context/app-context";

import Loader from "components/Loader";
import Showcaser from "components/Showcaser";

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

    return (
      <div className={`home`}>
        {!previous && loaderActive ? (
          <Loader finishLoader={finishLoader} />
        ) : (
          <Showcaser state={state} />
        )}
      </div>
    );
  }
}
