import React, { Component } from "react";
import { profileInfo } from "./data";
import { SocialLinks } from "./socialLinks";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: `url(${profileInfo.image})` }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">{profileInfo.name}</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> {profileInfo.email}
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#experience" data-nav-section="experience">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#education" data-nav-section="education">
                      Education
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <SocialLinks />
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i>
                  <br></br>
                  Thanks{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  for inspiration
                </small>
              </p>
              <p>
                <small>
                  © {new Date().getFullYear()} {profileInfo.name}
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
