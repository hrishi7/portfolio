import React, { Component } from "react";
import { profileInfo } from "./data";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              {profileInfo.projects.map((project) => (
                <div
                  className="col-md-4 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div
                    className="project"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>
                          <a href={project.github} rel="noopener noreferrer">{project.heading}</a>
                        </h3>
                        <span>{project.short_descp}</span>
                        <p className="icon">
                          <span>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" >
                              <i className="icon-github" /> code
                            </a>
                          </span>
                          <span>
                            <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                              <i className="icon-eye" /> live
                            </a>
                          </span>
                        </p>
                      </div>
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
