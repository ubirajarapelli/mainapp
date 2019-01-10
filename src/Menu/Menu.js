import React, {Component} from 'react';
// import MenuItem from './MenuItem'

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

export default Menu
