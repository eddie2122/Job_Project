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
                    Continental <br/>PremiumContact &trade;6  
                </p>
                <img className="Logoimg" src="/images/Logo_OE_Approved_1c_black_final.png" alt="LogoOE"></img>
                <p className="TyreSize"><i>195/55 R16 H</i></p>
                <p className="Suv"><i>SUV</i></p>
                <p className="StockPL"><i>Stock</i></p>
                <div className={this.props.StockAvailableYes}>
                    <p className="AvailableTyres">{this.props.tyresAvailable}</p>
                </div>
                <div className="CountC"><div className="CountNumberC">{this.state.count}</div></div>
                <button className="Buttondec" onClick={this.decrement}>-</button>
                <button className="Buttoninc" onClick={this.increment}>+</button>
                <p className="PriceC"><i>Price &#8362;340</i></p>
                <p className="TotalCash">Total &#8362;{this.state.count * 340}</p>
                <p className="Save">Save &#8362;408</p>
                <button onclick={this.thankYou}className={this.props.classDivBox}>
                    <img src={this.props.img} alt="Cart" className={this.props.classImg} id="NoBackground"></img>
                    <p className="AddToCartC" id="AddToCartN">{this.props.name}</p>
                </button>
            </div>
        )
    }
}

export default ProductsList
