import React from "react";
import { get } from "lodash";
import locomotiveScroll from "locomotive-scroll";
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
import NextProject from "./NextProject";
import Cursor from "./Cursor";

export default class CaseContent extends React.Component {
  static contextType = AppContext;
  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.scroll = React.createRef();
    this.project = data.projects.find(x => x.slug === this.props.slug);
    this.projectIndex = data.projects.findIndex(
      x => x.slug === this.props.slug
    );
    this.state = {
      cursorVisible: false,
      cursorContent: "",
      cursorColor: "red"
    };

    this.projectsLength = data.projects.length;
    this.nextProjectIndex =
      this.projectIndex + 1 > data.projects.length - 1
        ? 0
        : this.projectIndex + 1;

    this.nextProject = data.projects[this.nextProjectIndex];
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

  setCursor = (visible, text, color = "red") => {
    this.setState({
      cursorVisible: visible,
      cursorContent: text,
      cursorColor: color
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
    const { cursorContent, cursorVisible, cursorColor } = this.state;
    const { project } = this;

    return (
      <>
        <Cursor
          {...position}
          visible={cursorVisible}
          text={cursorContent}
          color={cursorColor}
        />
        <div className={`case`} ref={this.ref}>
          <div ref={this.scroll}>
            {/* <ScrollWrapper state={state}> */}
            <div className={`case__content`} ref={this.content}>
              {/* Header */}
              <div className="case__header flex flex--center-middle wrapper">
                <h2 className="mainTitle">{get(project, "name")}/</h2>
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
                    return (
                      <ContentSection
                        content={get(section, "content")}
                        theme={get(section, "theme")}
                      />
                    );
                  case "content-title":
                    return (
                      <ContentTitleSection
                        title={get(section, "title")}
                        content={get(section, "content")}
                        theme={get(section, "theme")}
                      />
                    );
                  case "image":
                    return <ImageSection image={get(section, "image")} />;
                  case "slider":
                    return (
                      <div className="with-cursor">
                        <ImagesSlider
                          images={get(section, "images")}
                          isFullPage={get(section, "isFullPage", false)}
                          setCursor={this.setCursor}
                        />
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
              <NextProject
                index={this.nextProjectIndex + 1}
                name={get(this.nextProject, "name")}
                slug={get(this.nextProject, "slug")}
                setCursor={this.setCursor}
              />
            </div>
            {/* </ScrollWrapper> */}
          </div>
        </div>
      </>
    );
  }
}
