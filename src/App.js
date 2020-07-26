import React from 'react';
import './App.scss';
import Main from './copmonents/main'
import Header from './copmonents/header';
import Footer from './copmonents/footer';
import ReactGA from 'react-ga';

function initializeAnalytics() {
  ReactGA.initialize('UA-154481477-3');
  ReactGA.pageview('/index');
}

function App() {
  initializeAnalytics()
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
