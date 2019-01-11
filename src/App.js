import React, { Component } from 'react';

import './main.css';
import './App.css';
import './Result.css';

const navigateTo = url => window.history.pushState(null, null, url);

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pathname : window.location.pathname
        }
    }

    handleMenuClick = () => {
        this.setState(
            () => ( {pathname : window.location.pathname} )
        );
    };

    render() {
        return (
            <nav className="Menu" onClick={this.handleMenuClick}>
                {this.props.children(this.state.pathname)}
            </nav>
        )
    }
}

const MenuItem = ({link, children, pathname}) => {

    return (
        <div onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
}

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
                <Menu>
                    {(pathname) => (
                        <div>
                            <MenuItem pathname={pathname} link='/flight'>Home</MenuItem>
                            <MenuItem pathname={pathname} link='/flight'>Voos</MenuItem>
                            <MenuItem pathname={pathname} link='/cars'>Carros</MenuItem>
                        </div>
                    )}
                </Menu>
                <div id="main">
                <button onClick={this.setTrayValue}>send to tray</button>
                    <div id="flight-app" />
                    <div id="cars-app" />
                </div>
                <div id="tray-app" />
            </div>
        )
    }
}

export default App;
