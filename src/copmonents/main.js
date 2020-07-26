import React, { Component } from 'react';
import AddTask from './addTask';

class Main extends Component {

  render () {
    return (
      <main className="main">
        <AddTask />
        <section className="section-support">
          <h3 className="section__support-heading t-body-heading">Was this useful?</h3>
          <p className="section__support-copy t-support-copy">Support the developer by using this <a href="https://brave.com/cor272" className="t-link">Brave Referral Link</a> and give the web browser a test run!</p>
        </section>
      </main>
    )
  }
}

export default Main;