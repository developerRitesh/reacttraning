import React, { Component } from 'react';
import Logo from '../image/orangemantra-logo.png';
import Menu from './Menu.js';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={Logo} />
                </div>       
                <Menu/>
            </div>
        )
    }
}
