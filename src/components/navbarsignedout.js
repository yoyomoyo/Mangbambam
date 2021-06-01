import React, { Component } from 'react';
import "../css/navbarsignedout.css"

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
                    <a href="/home">FEATURED</a>
                    <a href="#updates">UPDATES</a>
                    <a href="/mangalist-1">MANGA LIST</a>
                    
                    <div class="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Find a title..." name="search"/>
                                
                        </form>
                    </div>
                    
                    <div class="logind"><a href="/">LOG OUT</a></div>
                </div>
                
            </div>
         )
    }
}

export default navbar;