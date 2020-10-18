import React, { Component } from 'react'
import './BestSeller.css'

export default class BestSeller extends Component {
    render() {
        return (
                <div>
                <div className="TyreImageBox">
                    <img src="/images/x200-Continental-PremiumContact-6.png" alt="tyre" width="123px" height="123px"/>
                </div>
                <div className="AutoExpress">
                    <img src="/images/Auto-Express-Tyre-Test-Winner-2018.png" alt="Auto Express" width="40.76" height="72.9"></img>
                </div>
                <div className="LogoOE">
                    <img src="/images/Logo_OE_Approved_1c_black_final.png" alt="OE"/>
                </div>
                </div>
            
        )
    }
}
