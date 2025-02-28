import React from 'react'
import './skill.css'
import htmlLogo from './img/html_logo.png'
import cssLogo from './img/css_logo.png'
import jsLogo from './img/js_logo.png'

export default function Skills() {
  return (
    <section id="skill">
    <div class="skill-container">
      <h1>SKILLS</h1>
      <div class="skills">
        <div class="skill-box">
          <img src={htmlLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={htmlLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={htmlLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={htmlLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={cssLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={cssLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={cssLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={cssLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={jsLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={jsLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={jsLogo} alt="" />
        </div>
        <div class="skill-box">
          <img src={jsLogo} alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}
