import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
        
            <div className="menu">
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>    
           
        )
    }
}
