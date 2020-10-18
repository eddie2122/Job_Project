import React, { Component } from 'react'
import './ProductsList.css'

export class ProductsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
        }
    }
    
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

    render() {
        return (
            <div>
                <p className="ContinentalP6">
                    Continental <br/>PremiumContact &trade;  
                </p>
                <img className="Logoimg" src="/images/Logo_OE_Approved_1c_black_final.png" alt="LogoOE"></img>
                <p className="TyreSize"><i>195/55 R16 H</i></p>
                <p className="Suv"><i>SUV</i></p>
                <div className="CountC"><div className="CountNumberC">{this.state.count}</div></div>
                <button className="Buttondec" onClick={this.decrement}>-</button>
                <button className="Buttoninc" onClick={this.increment}>+</button>
                <p className="Price"><i>Price 340</i></p>
                <p className="TotalCash">Total {this.state.count * 340}</p>
                <button onclick={this.thankYou}className={this.props.classDivBox}>
                    <img src={this.props.img} alt="Cart" className={this.props.classImg}></img>
                    <p className="AddToCartC">{this.props.name}</p>
                </button>
            </div>
        )
    }
}

export default ProductsList
