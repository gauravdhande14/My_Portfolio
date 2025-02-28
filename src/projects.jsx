import React from 'react'
import './project.css'
import img from './img/img.png'

export default function Projects() {
  return (
    <section id="project">
      <div class="project-container">
        <h1>PROJECTS</h1>
        <div class="projects">
          <div class="project-box">
            <img src={img} alt="" />
            <h2>Project 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              excepturi sapiente, consequatur, ducimus odit quis, tempora
              mollitia cum sint libero vel molestias consequuntur voluptate
              beatae laudantium quibusdam laboriosam illum aliquam.
            </p>
            <button>Github</button>
          </div>
          <div class="project-box">
            <img src={img} alt="" />
            <h2>Project 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              excepturi sapiente, consequatur, ducimus odit quis, tempora
              mollitia cum sint libero vel molestias consequuntur voluptate
              beatae laudantium quibusdam laboriosam illum aliquam.
            </p>
            <button>Github</button>
          </div>
          <div class="project-box">
            <img src={img} alt="" />
            <h2>Project 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              excepturi sapiente, consequatur, ducimus odit quis, tempora
              mollitia cum sint libero vel molestias consequuntur voluptate
              beatae laudantium quibusdam laboriosam illum aliquam.
            </p>
            <button>Github</button>
          </div>
          <div class="project-box">
            <img src={img} alt="" />
            <h2>Project 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              excepturi sapiente, consequatur, ducimus odit quis, tempora
              mollitia cum sint libero vel molestias consequuntur voluptate
              beatae laudantium quibusdam laboriosam illum aliquam.
            </p>
            <button>Github</button>
          </div>
        </div>
      </div>
    </section>
  )
}
