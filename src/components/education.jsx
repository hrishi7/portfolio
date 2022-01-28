import React, { Component } from "react";
import { profileInfo } from "./data";

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {profileInfo.education.map((edu) => (
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            {edu.degree} from {edu.college}{" "}
                            <span>
                              passout on {edu.passout}
                            </span>{" "}
                            ({edu.location})
                          </h2>
                        </div>
                      </div>
                    </article>
                  ))}

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
