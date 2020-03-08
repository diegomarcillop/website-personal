import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/nav';
import About from './components/About/about';
 import Skill from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Home from './components/Social/home';
 

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <About />
       <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
