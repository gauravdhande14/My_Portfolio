import React from 'react'
import './footer.css'
import githubLogo from './img/github_logo.jpg'
import linkedinLogo from './img/linkdin_logo.png'
import instagramLogo from './img/instagram_logo.png'
import twitterLogo from './img/twitter_logo.jpg'
import fbLogo from './img/fb_logo.png'

export default function Footer() {
  return (
    <div>
      <footer>

        <p>&copy; {new Date().getFullYear()} Gaurav Dhande. All Rights Reserved.</p>
        <h2>Follow me on:</h2>
  
        
        <a href="https://github.com/gauravdhande14"><img src={githubLogo} alt="GitHub"/></a>
        <a href="https://www.linkedin.com/in/gaurav-dhande-8427a133a/"><img src={linkedinLogo} alt="LinkedIn"/></a>
        <a href="https://www.instagram.com/gauravdhande_14/"><img src={instagramLogo} alt="Instagram"/></a>
        <a href="https://x.com/GauravD83934219"><img src={twitterLogo} alt="Twitter"/></a>
        <a href="https://www.facebook.com/gsdking.dhande.9"><img src={fbLogo} alt="Facebook"/></a>
        
  
        <a href="mailto:dhandegaurav14@gmail.com">Email: dhandegaurav14@gmail.com</a>
  
  
      </footer>
    </div>
  )
}
