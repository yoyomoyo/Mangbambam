import React, { Component } from 'react';
import logo from '../css/logobanner.png';
import image1 from '../css/cover1.png';
import image2 from '../css/cover2.png';
import image3 from '../css/cover3.jpg';
import image4 from '../css/cover4.png';
import image5 from '../css/cover5.png';
import '../App.css';
import Taku from "./navbarsignedout.js";


// USER LOGGED IN
// USER LOGGED IN
// USER LOGGED IN

class Home extends Component {
  constructor(){
    super();
    this.signoutClick = this.signoutClick.bind(this);
  }

  signoutClick(){
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/my-react-app/src/php/signout_action.php";
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var res = JSON.parse(this.responseText);
            if(res["status"] === 200){
                window.location.replace('/login'); //replaces the current location
                //window.location = '../public/index.php'; //navigates to another location
            }
        }
    };
  } 
  
  componentDidMount() {
    console.log("home page component did mount");
  }
 
  componentWillUnmount(){
    console.log("home page component will unmount");
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
                <a className="mangaimage" href="/Kimetsu-No-Yaiba-1">
                  <img src={image1} className="mangaimage" alt="image1"/>
                </a>
                <div class="manganame">
                  <a href="/Kimetsu-No-Yaiba-1">Kimetsu no Yaiba</a>
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
  
export default Home;