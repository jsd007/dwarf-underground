import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Articles from './Articles'

class App extends Component {
  render() {
    return (
      <div className="App">    
    <Header />
    <Articles />
    <Footer />
      </div>
    );
  }
}

export default App;
