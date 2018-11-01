import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    render(){
        return(
            <div className="app">
                <div id="main"></div>
                <div id="tray-app" />
            </div>
        )
    }
}

export default App;