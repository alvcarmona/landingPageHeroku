import React, {Component} from 'react';
import NavbarComponent from './components/navbarComponent'
import FormComponent from './components/formComponent'
import BiographyComponent from './components/biographyComponent'
import DisplayComponent from './components/DisplayComponent'
import DoubleColComponent from './components/doubleColComponent'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="pagewrap">
                    <header id="header">
                        <NavbarComponent/>
                    </header>
                    <DoubleColComponent />
                    <DisplayComponent />
                    <DisplayComponent/>
                    <BiographyComponent />
                    <FormComponent/>
                </div>
            </div>
        );
    }
}

export default App;
