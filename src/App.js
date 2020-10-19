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
      <div className="ProductContainer1">
      <ProductsList 
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      StockAvailableYes = "StockAvailableYes"
      />
      </div>
      <div className="ProductContainer2">
      <ProductsList
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      tyresAvailable = "8 Tires Left"
      />
      </div>
      <div className="ProductContainer3">
      <ProductsList 
      name = "Notify Me!"
      img = "/images/notifications-sharp.png"
      classImg = "YelloBellImage"
      classDivBox = "BellBoxC"
      tyresAvailable = "Back in 1 week"
      />
      </div>
      <div className="ProductContainer9">
      <ProductsList 
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      tyresAvailable = "Back in 1 week"
      />
      </div>
      <div className="ProductContainer4">
      <ProductsList 
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      tyresAvailable = "Back in 1 week"
      />
      </div>
      <div className="ProductContainer5">
      <ProductsList 
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      tyresAvailable = "Back in 1 week"
      />
      </div>
      <div className="ProductContainer6">
      <ProductsList 
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      tyresAvailable = "Back in 1 week"
      />
      </div>
      <div className="ProductContainer7">
      <ProductsList 
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      tyresAvailable = "Back in 1 week"
      />
      </div>
      <div className="ProductContainer8">
      <ProductsList 
      name = "Add to Cart"
      img = "/images/cart-sharp-black.png"
      classImg = "YelloCartIMageC"
      classDivBox = "CartBoxC"
      tyresAvailable = "Back in 1 week"
      />
      </div>
    </div>
    
  )
}

export default App;
