import React, { Component } from 'react';
import "../css/mangapage.css"
import image1 from '../css/cover1.png';
import Taku from "./navbarsignedout.js";
import logo from '../css/logobanner.png';
import '../App.css';

class faves extends Component {
    constructor(){
        super();
        this.state = {
            sampleString: "mangapage"
        }

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
        
          <div className ="mangapage">
            <div className="logoheader">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Taku/>
        </div>
          
        
        );
        
      }
    }
      
    export default faves;