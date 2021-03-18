import React, { Component } from 'react';

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open})
    }

    render(){
        const {open} = this.state
        return(
            <nav>
                <img className='menu' src={'https://designshack.net/wp-content/uploads/reasons-to-avoid-hamburger-icon.png'} alt='menu-icon' onClick={this.handleClick}></img>
                <ul className={open ? 'opened' : 'closed'}>
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