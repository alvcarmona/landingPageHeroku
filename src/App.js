import React, {Component} from 'react';
import logo from './logo.svg';
import NavbarComponent from './components/navbarComponent'
import FormComponent from './components/formComponent'
import BiographyComponent from './components/biographyComponent'
import DisplayComponent from './components/DisplayComponent'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="pagewrap">
                    <header id="header">
                        <NavbarComponent/>
                    </header>
                    <div id="content">
                        <BiographyComponent/>
                        <DisplayComponent/>
                        <FormComponent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
