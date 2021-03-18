import React, { Component } from 'react';

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            menu: 'closed'
        }
    }

    menu = () => {
        if (this.state.menu === 'closed'){
            this.setState({menu: 'open'})
        } else {
            this.setState({menu: 'closed'})
        }
    }

    render(){
        return(
            <nav>
                <img className='menu' src={'https://designshack.net/wp-content/uploads/reasons-to-avoid-hamburger-icon.png'} onClick={this.menu}></img>
                <ul className={this.state.menu === 'closed' ? 'closed' : ''}>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        )
    }
}

export default Nav