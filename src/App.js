import React, { Component } from 'react';

import './main.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    setTrayValue() {
        const event = new Event('setTrayValue');
        window.dispatchEvent(event);
    }


    render(){
        return(
            <div className="app">
                <nav>
                  <ul>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Voos</a></li>
                    <li><a href="">Carros</a></li>
                  </ul>
                </nav>
                <div id="main">
                    <div id="cars-app" />
                </div>
                <div id="tray-app" />
            </div>
        )
    }
}

export default App;
