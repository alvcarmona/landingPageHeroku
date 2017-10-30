import React, { Component } from 'react';

class NavbarComponent extends Component {

    render() {
        return (
            <div className="Navbar">
                <div className="topnav" id="myTopnav">
                    <a className="left">Logo.</a>
                    <a className="right-align"></a>
                    <a className="right-align" href="#contact">Contact</a>
                    <a className="right-align" href="#display">Display</a>
                    <a className="right-align" href="#about">About</a>
                    <a className="right-align" href="#home">Home</a>
                    <a  href="javascript:void(0);" className="icon right-align" onClick={() => {
                        let x = document.getElementById("myTopnav");
                        if (x.className === "topnav") {
                            x.className += " responsive";
                        } else {
                            x.className = "topnav";
                        }}}>&#9776;</a>
                </div>
            </div>
        );
    }
}

export default NavbarComponent;
