import React, { Component } from 'react';
import Bio from './Bio';
import Contact from './Contact';
import Github from './Github';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='btn-container'>
        <Bio />
        <Contact />
        <Github />
      </div>
    )
  }
}

export default App;
