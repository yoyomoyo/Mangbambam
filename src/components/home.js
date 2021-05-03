import React, { Component } from 'react';

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
        <div>
          <h1>Hello!</h1>
            <button name="btnsignout" className="btn btn-danger btn-lg" onClick={this.signoutClick}>Sign Out</button>
        </div>
    );
  }
}
  
export default Home;