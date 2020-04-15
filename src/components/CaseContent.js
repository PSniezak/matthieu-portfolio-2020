import React from "react";
import { get } from "lodash";
import { AppContext } from "context/app-context";
import ScrollWrapper from "components/ScrollWrapper";
import { timeline } from "utils/timeline";
import { data } from "../data";
import VideoSection from "./VideoSection";
import ImagesSlider from "./ImageSlider";
import ContentSection from "./ContentBlock";
import ContentTitleSection from "./ContentTitleSection";
import ImageSection from "./ImageSection";
import ImagesParallax from "./ImagesParallax";
import locomotiveScroll from "locomotive-scroll";
import ReactCursorPosition from "react-cursor-position";
import Cursor from "./Cursor";

export default class CaseContent extends React.Component {
  static contextType = AppContext;
  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.scroll = React.createRef();
    this.project = data.projects.find(x => x.slug === this.props.slug);

    this.state = {
      cursorVisible: false,
      cursorContent: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const scroll = new locomotiveScroll({
        el: this.scroll.current,
        smooth: true
      });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { previous } = this.context.location;
    const { state } = this.props;

    if (previous) {
      if (state === "exiting") {
        this.animateOut();
      }

      if (state === "entering") {
        this.animateIn(400);
      }
    } else {
      if (state === "entered") {
        this.animateIn(0);
      }
    }
  }

  setCursor = (visible, text) => {
    this.setState({
      cursorVisible: visible,
      cursorContent: text
    });
  };

  animateIn(delay = 0) {
    if (this.status === "entering") return;

    this.status = "entering";

    timeline({}).add({
      targets: this.ref.current.children,
      opacity: [0, 1],
      translateY: [80, 0],
      translateZ: 0,
      easing: "easeOutQuart",
      duration: 1000,
      delay
    });
  }

  animateOut() {}

  render() {
    const { state, position } = this.props;
    const { cursorContent, cursorVisible } = this.state;
    const { project } = this;

    return (
      <>
        <Cursor {...position} visible={cursorVisible} text={cursorContent} />
        <div className={`case`} ref={this.ref}>
          <div ref={this.scroll}>
            {/* <ScrollWrapper state={state}> */}
            <div className={`case__content`} ref={this.content}>
              {/* Header */}
              <div className="case__header flex flex--center-middle wrapper">
                <h2 className="mainTitle">{get(project, "name")} </h2>
                <div className="case__headerTags">
                  {get(project, "tags", []).map(tag => {
                    return (
                      <span key={tag} className="tag colored--grey uppercase">
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>

              {get(project, "sections").map(section => {
                switch (section.type) {
                  case "content":
                    return <ContentSection content={get(section, "content")} />;
                  case "content-title":
                    return (
                      <ContentTitleSection
                        title={get(section, "title")}
                        content={get(section, "content")}
                      />
                    );
                  case "image":
                    return <ImageSection image={get(section, "image")} />;
                  case "slider":
                    return (
                      <div
                        className="with-cursor"
                        onMouseEnter={() => this.setCursor(true, "Drag")}
                        onMouseLeave={() => this.setCursor(false, "")}
                      >
                        <ImagesSlider images={get(section, "images")} />
                      </div>
                    );
                  case "paralax":
                    return (
                      <ImagesParallax
                        title={get(section, "title")}
                        images={get(section, "images")}
                      />
                    );
                  case "video":
                    return (
                      <div
                        className="with-cursor"
                        onMouseEnter={() => this.setCursor(true, "Play")}
                        onMouseLeave={() => this.setCursor(false, "")}
                      >
                        <VideoSection
                          imgUrl={get(section, "image")}
                          videoID={get(section, "video")}
                          setCursor={this.setCursor}
                        />
                      </div>
                    );

                  default:
                    break;
                }
              })}
            </div>
            {/* </ScrollWrapper> */}
          </div>
        </div>
      </>
    );
  }
}
