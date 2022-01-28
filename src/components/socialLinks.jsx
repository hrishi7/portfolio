import React from "react";
import { profileInfo } from "./data";

export const SocialLinks = () => (
  <ul>
    {profileInfo.socialLinks.map((link) => (
      <li>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          <i className={link.icon} />
        </a>
      </li>
    ))}
  </ul>
);
