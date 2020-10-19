import React, { Component } from 'react'
import './BestSeller.css'

export default class BestSeller extends Component {
    render() {
        return (
                <div>
                <div className="TyreImageBox">
                    <img className="Tyreimg" src="/images/x200-Continental-PremiumContact-6.png" alt="tyre" width="123px" height="123px"/>
                </div>
                <div className="AutoExpress">
                    <img className="Autoimg"src="/images/Auto-Express-Tyre-Test-Winner-2018.png" alt="Auto Express" width="40.76" height="72.9"></img>
                </div>
                <div className="LogoOE">
                    <img className="OEimg" src="/images/Logo_OE_Approved_1c_black_final.png" alt="OE" width="" height=""/>
                </div>
                </div>
            
        )
    }
}
