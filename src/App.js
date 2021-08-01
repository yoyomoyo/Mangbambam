import logo from './css/logobanner.png';
import image1 from './css/cover1.png';
import image2 from './css/cover2.png';
import image3 from './css/cover3.jpg';
import image4 from './css/cover4.png';
import image5 from './css/cover5.png';
import './App.css';
import Taku from "./components/navbar.js";
import React, { Component } from 'react';


//USER WILL LOG IN
//USER WILL LOG IN
//USER WILL LOG IN


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
            <div className="apphome-header">TOP MANGA</div>
            <br/>
            <div class="row">
              <div class="column">
                <a className="mangaimage" href="/Kimetsu-No-Yaiba-0">
                  <img src={image1} className="mangaimage" alt="image1"/>
                </a>
                <div class="manganame">
                  <a href="/Kimetsu-No-Yaiba-0">Kimetsu no Yaiba</a>
                </div>
              </div>
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image2} className="mangaimage" alt="image2"/>
                </a>
                <div class="manganame">
                  <a href="#">Jujutsu no Kaisen</a>
                </div>
              </div>
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image3} className="mangaimage" alt="image3"/>
                </a>
                <div class="manganame">
                  <a href="#">Boku no Hero Academia</a>
                </div>
              </div>
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image4} className="mangaimage" alt="image4"/>
                </a>
                <div class="manganame">
                  <a href="#">One Piece</a>
                </div>
              </div>
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image5} className="mangaimage" alt="image5"/>
                </a>
                <div class="manganame">
                  <a href="#">The Promised Neverland</a>
                </div>
              </div>
            </div>
          </div>
          <div className="apphomebody">
            <div className="apphome-header">LATEST RELEASE</div>
            <br/>
            <div class="row">
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image1} className="mangaimage" alt="image1"/>
                </a>
                <div class="manganame">
                  <a href="#">Kimetsu no Yaiba</a>
                </div>
              </div>
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image2} className="mangaimage" alt="image2"/>
                </a>
                <div class="manganame">
                  <a href="#">Jujutsu no Kaisen</a>
                </div>
              </div>
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image3} className="mangaimage" alt="image3"/>
                </a>
                <div class="manganame">
                  <a href="#">Boku no Hero Academia</a>
                </div>
              </div>
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image4} className="mangaimage" alt="image4"/>
                </a>
                <div class="manganame">
                  <a href="#">One Piece</a>
                </div>
              </div>
              <div class="column">
                <a className="mangaimage" href="#">
                  <img src={image5} className="mangaimage" alt="image5"/>
                </a>
                <div class="manganame">
                  <a href="#">The Promised Neverland</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
