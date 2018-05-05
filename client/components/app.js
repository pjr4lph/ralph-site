import React, { Component } from 'react';
import Bio from './bio.js';
import Contact from './contact.js';
import Github from './github.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Bio />
      <Contact />
      <Github />
    )
  }
}

export default App;
