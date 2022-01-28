import React, { Component } from "react";
import { profileInfo } from "./data";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="skills">
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              {profileInfo.skills.map((skill) => (
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-1">
                    <span className="icon">
                      <i className="icon-bulb" />
                    </span>
                    <div className="desc">
                      <h3>{skill.section} </h3>
                      <p>{skill.items.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
