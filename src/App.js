import React, { Component } from 'react';
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
                <div id="main">
                    <button onClick={this.setTrayValue}>go To tray</button>
                    <div id="cars-app" />
                </div>
                <div id="tray-app" />
            </div>
        )
    }
}

export default App;