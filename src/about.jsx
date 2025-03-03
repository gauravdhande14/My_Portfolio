import React from 'react'
import './about.css'
import gauravImage from './img/gaurav.jpg'

export default function About() {
  return (
    <section id="about">
    <div class="hero-container">
      <div class="image-container">
        <div class="circle">
          <img src={gauravImage} alt="Gaurav Image" />
        </div>
      </div>
      <div class="description-container">
        <h2>GAURAV DHANDE</h2>
        <h3>Web Designer | Web Developer | Editor</h3>
        <p>
        I am a recent graduate with a Bachelor's degree in Information Technology (BSc IT). My academic foundation has given me a solid understanding of various aspects of technology, and I'm now focused on expanding my skills in UI/UX and Web Design.
Currently, I'm enhancing my creative and technical abilities through a training program at Magic Bus, where I'm learning to design user-friendly and visually appealing interfaces. I have a passion for creating seamless user experiences and believe that great design can significantly impact how people interact with digital products.
I'm eager to combine my technical knowledge with my growing design skills to contribute to impactful web and app designs. I'm excited about the opportunity to work in dynamic, collaborative environments and learn from experienced designers and developers along the way.
        </p>
        <a href="/Gaurav_Resume.pdf" download="Gaurav_Resume.pdf">
        <button>Download My CV</button></a>
      </div>
    </div>
  </section>
  )
}
