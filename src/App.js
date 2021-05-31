import logo from './css/logobanner.png';
import image1 from './css/cover1.png';
import './App.css';
import Taku from "./components/navbar.js";
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(){
    this.props.history.push('/page2');
  }

  render() {
    return (
      <div className="App">
        <div className="logoheader">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Taku/>
        <div className="Apphome">
          <div className="apphomebody">
            <div className="apphome-header">Top Manga</div>
            <br/>
            <a className="mangaimage" href="#">
                <img src={image1} className="mangaimage" alt="image1"/>
            </a>
            <br/>
            <a href="#">Kimetsu</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
