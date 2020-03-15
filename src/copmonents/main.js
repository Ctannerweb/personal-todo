import React, { Component } from 'react';
import AddTask from './addTask';

class Main extends Component {

  render () {
    return (
      <main className="main">
        <AddTask />
      </main>
    )
  }
}

export default Main;