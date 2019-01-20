import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import PeopleCard from './PeopleCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div id="people" >
          <h1>People</h1>
          <PeopleCard />
        </div>
        <div id="planets" >
          <h1>Planets</h1>
        </div>
        <div id="films" >
          <h1>Films</h1>
        </div>
        <div id="species" >
          <h1>Species</h1>
        </div>
        <div id="vehicles" >
          <h1>Vehicles</h1>
        </div>
        <div id="starship" >
          <h1>Starship</h1>
        </div>
      </div>
    );
  }
}

export default App;
