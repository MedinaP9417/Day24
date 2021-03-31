
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
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>setLocalStorage</button>
      </div>
    );
  }
}

export default App;