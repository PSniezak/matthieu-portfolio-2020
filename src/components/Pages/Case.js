import React from "react";
import { get } from "lodash";
import { AppContext } from "context/app-context";
import ScrollWrapper from "components/ScrollWrapper";
import { timeline } from "utils/timeline";
import { data } from "data";
import VideoSection from "../VideoSection";
import ImagesSlider from "../ImageSlider";

export default class Case extends React.Component {
  static contextType = AppContext;

  status = null;

  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.project = data.projects.find((x) => x.slug === this.props.slug);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.project);
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
      delay,
    });
  }

  animateOut() {}

  render() {
    const { state } = this.props;
    const { project } = this;

    return (
      <div className={`case`} ref={this.ref}>
        <ScrollWrapper state={state}>
          <div className={`case__content`} ref={this.content}>
            {/* Header */}
            <div className="case__header flex flex--center-middle wrapper">
              <h2 className="mainTitle">{get(project, "name")} </h2>
              <div className="case__headerTags">
                {get(project, "tags", []).map((tag) => {
                  return (
                    <span key={tag} className="tag colored--grey uppercase">
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* content */}
            <div className="case__description section wrapper wrapper--small ">
              <p className="text text--large">{get(project, "description")}</p>
            </div>

            {/* Image video section: TODO */}
            <VideoSection
              imgUrl={get(project, "section__video.image")}
              videoID={get(project, "section__video.video")}
            />

            {/* Final Frame */}

            <div className="case__finalFrames flex wrapper">
              <div className="case__finalFramesTitle">
                <h3 className="title title--small">
                  {get(project, "section_finalFrames.title")}
                </h3>
              </div>
              <div className="case__finalFramesContent">
                <p className="text text--small">
                  {get(project, "section_finalFrames.content")}
                </p>
              </div>
            </div>

            {/* Slider */}
            <ImagesSlider images={get(project, "section_finalFrames.images")} />
          </div>
        </ScrollWrapper>
      </div>
    );
  }
}
