import React, { Component } from 'react';
import "../css/navbar.css"

class navbar extends Component {
    constructor(){
        super();
        this.state = {
            sampleString: "navbar"
        }

    }


    componentDidMount() {
        console.log("the page is working");
    }

    componentWillUnmount(){
        console.log("this page has been closed");
    }

    render(){
        return(
            <div>
                <div class="topnav">
                    <a href="/">FEATURED</a>
                    <a href="/mangalist-0">MANGA LIST</a>
                    
                    <div class="search-container">
                        <form action="/Kimetsu-No-Yaiba-0">
                            <input type="text" placeholder="Find a title..." name="search"/>
                                
                        </form>
                    </div>
                    
                    <div class="logind"><a href="/login">LOG IN</a></div>
                </div>
                
            </div>
         )
    }
}

export default navbar;