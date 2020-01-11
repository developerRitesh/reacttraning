import React, { Component } from 'react'

export default class Button extends Component {
    sayHello() {
        alert('Hello!');
    }
    render() {
        return (
            <button className="click_me_class" >Click me!</button>
        )
    }
}
