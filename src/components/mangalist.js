import logo from '../css/logobanner.png';
import '../css/mangalist.css';
import Taku from "./navbar.js";
import React, { Component } from 'react';

class mangalist extends Component {
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
        <div className="logoheaderlist">
          <img src={logo} className="App-logolist" alt="logo" />
        </div>
        <Taku/>
        <div className="Apphomelist">
          <div className="apphomebodymlist">
            <div className="apphome-headerlist">Currently Available Manga</div>
            <span><div className="list1">
            <li><a href="/Kimetsu-No-Yaiba-0">Kimetsu no Yaiba</a></li>
            <li><a href="#">Ijiranaide Nagatoro san</a></li>
            <li><a href="#">Iiko no Furi wa mou Yameru</a></li>
            <li><a href="#">Kyuuketsuki no Sumu Machi</a></li>
            <li><a href="#">Tomo-chan wa Onnanoko!</a></li>
            <li><a href="#">Boku no Hero Academia</a></li>
            <li><a href="#">Komi-san wa Komyushou Desu</a></li>
            <li><a href="#">Tensei Shitara Slime Datta Ken</a></li>
            <li><a href="#">Mushoku Tensei - Isekai Ittara Honki Dasu</a></li>
            <li><a href="#">Hajime no Ippo</a></li>
            <li><a href="#">Kumo desu ga, nani ka?</a></li>
            <li><a href="#">Isekai Nonbiri Nouka</a></li>
            <li><a href="#">Nanatsu no Taizai</a></li>
            </div>
            <div className="list2">
            <li><a href="#">Bleach</a></li>
            <li><a href="#">Goblin Slayer</a></li>
            <li><a href="#">The Rising of the Shield Hero</a></li>
            <li><a href="#">Tamen De Gushi</a></li>
            <li><a href="#">Dr. Stone</a></li>
            <li><a href="#">Horimiya</a></li>
            <li><a href="#">Kanojo, Okarishimasu</a></li>
            <li><a href="#">Yakusoku no Neverland</a></li>
            <li><a href="#">Enen no Shouboutai</a></li>
            <li><a href="#">Jujutsu Kaisen</a></li>
            <li><a href="#">Haikyuu!!</a></li>
            <li><a href="#">Parallel Paradise</a></li>
            <li><a href="#">Nidoume no Jinsei wo Isekai de</a></li>   
            </div>
            <div className="list3">
            <li><a href="#">Chainsaw Man</a></li>
            <li><a href="#">Go-Toubun no Hanayome</a></li>
            <li><a href="#">Bokutachi wa Benkyou ga Dekinai</a></li>
            <li><a href="#">Shokugeki no Soma</a></li>
            <li><a href="#">Isekai Meikyuu de Harem o</a></li>
            <li><a href="#">Tsuki ga Michibiku Isekai Douchuu</a></li>
            <li><a href="#">History's Strongest Disciple Kenichi</a></li>
            <li><a href="#">Isekai Kenkokuki</a></li>
            <li><a href="#">Isekai Tensei Soudouki</a></li>
            <li><a href="#">Tokyo Manji Revengers</a></li>
            <li><a href="#">Gokushufudou: The Way of the House Husband</a></li>
            <li><a href="#">The New Gate</a></li>
            <li><a href="#">Arifureta Shokugyou de Sekai Saikyou</a></li>   
            </div>
            </span>
          </div>
        </div>
        <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#"class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">&raquo;</a>
            </div>
      </div>
    );
  }
}

export default mangalist;