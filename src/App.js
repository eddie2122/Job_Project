import React from 'react';
import Header from './components/header/navBar/NavBar'
import './App.css'
import Products from './components/products/Products';
import Tyre from './components/main/BestSeller/tyre/Tyre'
import ProductsList from './components/main/productsList/ProductsList'

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/> 
      <div className="Background">
      <div className="SellerBox">
      <Tyre/>  
      </div>
      <div className="PremiumSellerBox">
        <Tyre/>
      </div>
      </div>
      <div className="ProductsContainer1">
      <ProductsList 
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      />
      </div>
      <div className="ProductContainer2">
      <ProductsList
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      />
      </div>
      <div className="ProductContainer3">
      <ProductsList 
      name = "Notify Me!"
      img = "/images/notifications-sharp.png"
      classImg = "YelloBellImage"
      classDivBox = "BellBoxC"
      />
      </div>
    </div>
    
  )
}

export default App;
