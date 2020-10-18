import React, { Component } from 'react'
import './Products.css'

export class Products extends Component {
    render() {
        return (
            <div>
            <p className="RecommendedProducts">RecommendedProducts</p>
                <div className="SortBox">
                <h3 className="Filters"><b><i>Select Filters:</i></b></h3>
                <div className="Continental"><h3 className="ContinentalText"><i>Continental</i></h3>
                <div className="DeSelectBox">
                <div className="DeSelect"></div></div>
                </div>
                <h3 className="SortBy"><b><i>Sort by:</i></b></h3>
                <div className="Popularity"><h3 className="PopularityName"><i>Popularity</i></h3></div>
            </div>
            <hr className="HorizontalLine"/>
            </div>
        )
    }
}

export default Products
