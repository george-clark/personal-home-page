import React from 'react'

import './App.css';

import experience from './experience.js'
import ExperienceEntry from './components/ExperienceEntry'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  // TODO: Set to on mount state when this is from database
  const experienceComponents = experience.map((entry) => <ExperienceEntry key={entry.id} entry={entry} />)

  let [content, setContent] = React.useState(<About />)

  function toggleContent(event) {
    if (event.target.name === 'resume') {
      setContent(experienceComponents)
    } else if (event.target.name === 'about') {
      setContent(<About />)
    } else {
      setContent("Hello!")
    }

  }

  return (
    <div className="App">
      <Header toggleContent={toggleContent}/>

      <main className="container">
        {content}
      </main>

      <Footer />
    </div>
  );
}

export default App;
