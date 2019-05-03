import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
  state = {
    peoples: []
  }

  componentDidMount() {    
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(users => this.setState({ peoples: users.results }))
  }

  render() {

    return (
      <div className="container">
        <CardList peoples={this.state.peoples} />
      </div>
    );
  }
}

export default App;