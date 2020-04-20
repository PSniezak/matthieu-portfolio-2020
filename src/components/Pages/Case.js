import React from "react";
import { get } from "lodash";
import { AppContext } from "context/app-context";
import ScrollWrapper from "components/ScrollWrapper";
import { timeline } from "utils/timeline";
import { data } from "data";
import VideoSection from "../VideoSection";
import ImagesSlider from "../ImageSlider";
import ContentSection from "../ContentBlock";
import ContentTitleSection from "../ContentTitleSection";
import ImageSection from "../ImageSection";
import ImagesParallax from "../ImagesParallax";
import locomotiveScroll from "locomotive-scroll";
import ReactCursorPosition from "react-cursor-position";
import CaseContent from "../CaseContent";

export default class Case extends React.Component {
  static contextType = AppContext;
  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.scroll = React.createRef();

    this.state = {};
  }

  render() {
    const { state, slug } = this.props;

    return (
      <ReactCursorPosition>
        <CaseContent state={state} slug={slug} />
      </ReactCursorPosition>
    );
  }
}
