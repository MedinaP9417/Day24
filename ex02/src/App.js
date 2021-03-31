
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
    localStorage.setItem('Paragon',
     Paragon);
    // Session Storage
    sessionStorage.setItem('frontend',
     frontend);
  };
  getMyStorage = () => {
    const myCookieData = 
    document.cookie.split('; ').find(row =>
      row.startsWith('Year=')).split('=')[1];
      const myLocalStorageData = 
      localStorage.getItem('Paragon');
      const mySessionStorageData = 
      sessionStorage.getItem('frontend');

      // console.log(myCookieData, myLocalStorageData, mySessionStorageData);
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Set My Storage</button>
        <button onClick={this.getMyStorage}>Get My Storage</button>
      </div>
    );
  }
}
export default App;