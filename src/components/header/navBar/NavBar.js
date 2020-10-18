import React, { Component } from "react";
import OptionSharp from "../optionSharp/OptionSharp";
import "./NavBar.css";
import Logo from "../logo/Logo";
import SearchBar from '../searchBar/SearchBar';
import Links from "../links/Links";

export class NavBar extends Component {
  render() {
    return (
      <div className="Header-box">
        <OptionSharp />
        <Logo />
        <SearchBar/>
        <Links  
        img="/images/person-sharp.png"  
        text="Account" 
        classImg="ProfileImg" 
        classDiv="Account-Box-Profile" 
        profileName="ProfileName"
        />
        <Links 
        img="/images/document-text-sharp.png" 
        text="Others"
        classImg="OthersImg" 
        classDiv="Account-Box-Other" 
        profileName="OthersName"
        />
        <Links
        img="/images/cart-sharp.png" 
        text="Cart"
        classImg="CartImg" 
        classDiv="Account-Box-Cart" 
        profileName="CartName"
        />
      </div>
    );
  }
}

export default NavBar;
