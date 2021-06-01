import React, { Component } from 'react';
import "../css/mangapage.css"
import image1 from '../css/cover1.png';
import Taku from "./navbarsignedout.js";
import logo from '../css/logobanner.png';
import '../App.css';

class mangapage extends Component {
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
            <div class="apphomebodypage">
                <div>
                  <img src={image1} className="mangaimage1" alt="image1"/>
                </div>
                <div className = "storyright">
                  <h1>Kimetsu No Yaiba</h1>
                    <div class="indesc">
                    <h2>Description:</h2>
                    <p> Tanjiro is the oldest son in his family who has lost his father. 
                      One day, Tanjiro ventures off to another town to sell charcoal.
                      Instead of going home, he ends up staying the night at someone else's house due to rumors of a demon nearby in the mountains. 
                      When he gets home the following day, a terrible tragedy awaits him. </p> 
                    </div>
                    <br/><br/><br/>
                    <h4>Author(s): Gotouge Koyoharu</h4>
                    <br/>
                    <h4>Updated: Dec 04,2020</h4>
              </div>
          </div>
          <div class="apphomebodypage">
            <table>
                <tr>
                  <th>Chapter List</th>
                  <th>Uploaded</th>
                </tr>
                <tr>
                  <td><a href="#">Chapter 205.5: Special One-Shot</a></td>
                  <td>Dec 4, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 205: Lives that Make the Years Shine</a></td>
                  <td>May 19, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 204: A World Without Demons</a></td>
                  <td>May 12, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 203: A Multitude of Stimulations</a></td>
                  <td>May 5, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 202: Lets Go</a></td>
                  <td>Apr 14, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 201: King of Demons</a></td>
                  <td>Jul 31, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 200: The Price of Victory</a></td>
                  <td>Mar 31, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 199: Dawn of a Thousand Years</a></td>
                  <td>Mar 23, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 198: If You Notice</a></td>
                  <td>Mar 17, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 197: Tenacity</a></td>
                  <td>Mar 10, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 196: I Am</a></td>
                  <td>Mar 2, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 195: Bewildering</a></td>
                  <td>Feb 22, 2020</td>
                </tr>
                <tr>
                  <td><a href="url">Chapter 194: Scorcing Wounds</a></td>
                  <td>Feb 18, 2020</td>
                </tr>
              </table>
            

          </div>
        </div>
          
        
        );
        
      }
    }
      
    export default mangapage;