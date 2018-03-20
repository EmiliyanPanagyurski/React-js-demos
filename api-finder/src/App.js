import React, { Component } from 'react';
import './App.css';
import SearchComponent from './components/search-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>API Finder!</h1>
        <h4>(Type in the API you want to find!)</h4>
        <SearchComponent/>
      </div>
    );
  }
}

export default App;
