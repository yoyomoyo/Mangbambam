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
                    <a href="#featured">FEATURED</a>
                    <a href="#updates">UPDATES</a>
                    <a href="#mangalist">MANGALIST</a>
                    
                    <div class="search-container">
                        <form action="/action_page.php">
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