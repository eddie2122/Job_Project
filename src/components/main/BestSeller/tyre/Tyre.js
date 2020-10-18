import React, { Component } from 'react'
import './Tyre.css';
import BestSeller from '../BestSeller'

export default class Tyre extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productName : "Continental-Contiecocontact 5",
             specification : "205/55 R16 H",
             model : "SUV",
             stock : true,
             classe : true,
             count : 0,
        }
    }
    // // stockAvailability = () => {
    // //     if(this.state.stock === true){
    // //         this.setState({classe : "StockAvailable"})
    // //     } else if(this.state.stock <= 10 ){
    // //         this.setState({classe : "LessStockAvailable"})
    // //     } else {
    // //         this.setState({classe : "StockUnavailable"})
    // //     }
             
    // }
    increment =() => {
        
        this.setState({count : this.state.count + 1})
    }
    decrement =() => {
        if(this.state.count > 0){
        this.setState({count : this.state.count - 1})
        } else {
            this.setState({count : 0})
        }
    } 
    thankYou =() => {
        let count = this.state.count
        
       return alert("Thank you for adding " + {count} + "Tyres to your cart");
    }
    render() {
        
        return (
            <div>
                <BestSeller/>
                <p className="TyreName">{this.state.productName}</p>
                <p className="Specification"><i>{this.state.specification}</i></p>
                <p className="Model"><i>{this.state.model}</i></p>
                <p className="Stock"><i>Stock</i></p>
                <div className="StockAvailable">
                    <div className="Tick"></div>
                </div>
                <p className="Price"><i>Price 340</i></p>
                <p className="Total"><i>Total</i></p>
                <div className="Count"><div className="CountNumber">{this.state.count}</div></div>
                <button className="Button-" onClick={this.decrement}>-</button>
                <button className="ButtonPlus" onClick={this.increment}>+</button>
                <div className="TotalPrice">{this.state.count * 340} </div>
                <button onclick={this.thankYou}className="CartBox">
                    <img src="/images/cart-sharp-black.png" alt="Cart" className="YelloCartIMage"></img>
                    <p className="AddToCart">Add to Cart</p>
                </button>
                <p className="Total Cash">total {this.state.count * 340}</p>
            </div>
        )
    }
}
