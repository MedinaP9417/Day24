

import './App.css';
import React, { Component } from "react";

class App extends Component {
  initialStorage = {
    Year: 'Year=2021',
    Paragon: 'yes, but Arena first',
    frontend: 'React'
  };
  setmyStorage = () => {
    const { Year, Paragon, frontend } = 
    this.initialState;
    document.cookie = Year;
   localStorage.setItem('Paragon');
   // Session Storage
   sessionStorage.setItem('frontend');
 };
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Set My Storage</button>
      </div>
    );
  }
} 
export default App;