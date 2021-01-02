import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Counter from './components/Counter'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        {/*<Greet name="jerop" heroName="karan">
        <p>This is children props</p>
        </Greet>
        <Greet name="karan" heroName="jerop">
          <button>Action</button>
          </Greet>
        <Greet name="badria" heroName="karan" />
        <Welcome name="jerop" heroName="karan" />
        <Welcome name="karan" heroName="jerop" />
        <Welcome name="badria" heroName="karan" />
        {/*<Hello/>*/}
      </div>
    );
  }
}

export default App;