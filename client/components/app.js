import React, { Component } from 'react';
import Bio from './Bio';
import Contact from './Contact';
import Github from './Github';

import styles from './../../style.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Bio />
        <Contact />
        <Github />
      </div>
    )
  }
}

export default App;
