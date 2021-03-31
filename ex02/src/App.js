
import './App.css';
import React, {Component} from 'react';


class App extends Component {
  initialStorage = {
    name: "",
    value: "",
  }
  // state = this.initialState;
  // handleChange = (event) => {
  //   const { name, value} = event.target;
  //   this.setMyStorage({
  //     [name]: value,
  //   });
  // };


 setMyStorage = (name, value) => {
  //  this.setMyStorage({ name: "value" });
   // Cookie
   document.cookie = ("Year=2021");
   // Local Storage
   localStorage.setItem('Paragon', 'Yes, but Arena first');
   // Session Storage
   sessionStorage.setItem('frontend', 'React');
 };

  // get documentCookieValue();
  // get localStorageValue();
  // get sessionStorageValue();

 getMyStorage = (name, value) => {

   var myDocumentCookieData = "Year=2021";
   var myLocalStorageData = ('Paragon', 'yes, but Arena first');
   var mySessionStorageData = ('frontend', 'React');
 };
 
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>setMyStorage</button>
      <button type="button" onClick={this.getMyStorage}>getMyStorage</button>
      </div>
    );
  }
} 
export default App;