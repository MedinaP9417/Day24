
import './App.css';

import { Component } from "react";

class App extends Component {
  initialStorage = {
    name: "",
    value: "",
  }
  setLocalStorage() {
    this.setLocalStorage.setItem = ({Arena: 'Selection Month'});
  };
  getLocalStorage() {
    this.getLocalStorage.getItem = ({Arena: ""});
    var myLocalStorageData = 'Selection Month';
  }
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>setLocalStorage</button>
      <button type="button" onClick={this.getLocalStorage}>getLocalStorage</button>
      </div>
    );
  }
}

export default App;