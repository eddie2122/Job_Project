import React, { Component } from 'react'
import './Links.css';
import './OthersImg.css';
import './Cart.css';

export default class Links extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image : ""
        }
    }
    
    render() {
        return (
            <div className={this.props.classDiv}>
                <img  className={this.props.classImg} src={this.props.img} alt="a"></img>
                <p className= {this.props.profileName}><i>{this.props.text}</i></p>
            </div>
        )
    }
}
