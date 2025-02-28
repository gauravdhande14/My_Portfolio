import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>
);


