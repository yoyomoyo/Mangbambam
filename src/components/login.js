import React, { Component } from 'react';
import $ from "jquery";
import "../css/login.css"
import "../css/form.css"

class Login extends Component {
  constructor(){
    super();
    this.signinSubmit = this.signinSubmit.bind(this);
  }

  signinSubmit(e){
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/my-react-app/src/php/signin_action.php";
    var data = $("#signinForm").serialize();
    var urlData = url+"?"+data;
    xhttp.open("GET", urlData, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var res = JSON.parse(this.responseText);
            if(res["status"] === 200){
                $('#signinForm')[0].reset();
                window.location.replace('/home'); //replaces the current location
                //window.location = '../public/home.php'; //navigates to another location
            }else{
                alert(res["message"]);
            }
        }
    };
    e.preventDefault();
  }
  
  componentDidMount() {
   console.log("login component did mount");
  }

  componentWillUnmount(){
    console.log("login component will unmount");
  }
  
  render() {
    return (
        <div>
          <div class="loginheader">
            <div class="loginlogo"></div>
          </div>
          <div class="signup-form">
            <form id="signinForm" method="get" onSubmit={this.signinSubmit}>
                <h2>Log In</h2>
                <br/>
                <div className="form-group">
                    <p>Account:</p>
                    <input type="text" className="form-control" name="email" id="email" placeholder="E-mail" required="required"/>
                </div>
                <div className="form-group">
                    <p>Password:</p>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Type Password here" required="required"/>
                </div>
                <div class="submitform">
                    <input type="submit" name="btnsignin" className="btn btn-primary btn-lg" value="Log In"/>
                </div>
                <hr/>
                <div class="hint-text">Don't have an account? <a href="/signup">Sign up here.</a></div>
            </form>
            </div>
            <div class="lee"></div>
            <div class="footer">© Mangbambam 2021</div>
        </div>
    );
  }
}
  
export default Login;