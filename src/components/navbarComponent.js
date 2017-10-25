import React, { Component } from 'react';

class NavbarComponent extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav>
                    <ul id="main-nav">
                        <li><a href="#">Home</a></li>
                        <li className="right-align"><a href="#">About</a></li>
                        <li className="right-align"><a href="#">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavbarComponent;
