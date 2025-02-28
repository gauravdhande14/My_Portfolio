import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
    <h1 class="logo">GAURAV</h1>
    <nav>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
      </ul>
    </nav>
    <a href="#contact" class="cta"><button>Contact Me</button></a>
  </header>
  )
}

