import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider, PrivateRoute } from './Components/UseAuth/UseAuth';
import './App.css';
import Header from './Components/Header/Header';
import Foods from './Components/Foods/Foods';
import Footer from './Components/Footer/Footer';
import Features from './Components/Features/Features';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import SignUp from './Components/SignUp/SignUp';
import Shipment from './Components/Shipment/Shipment';
import OrderComplete from './Components/OrderComplete/OrderComplete';
import NotFound from './Components/NotFound/NotFound';
import SearchResult from './Components/SearchResult/SearchResult';
import TopBanner from './Components/TopBanner/TopBanner';
import Inventory from './Components/Inventory/Inventory';


function App() {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [deliveryDetails, setDeliveryDetails] = useState({
    todoor: null, road: null, flat: null, businessname: null, address: null
  });

  const [userEmail, setUserEmail] = useState(null);
  const deliveryDetailsHandler = (data) => {
    setDeliveryDetails(data)
  }

  const getUserEmail = (email) => {
    setUserEmail(email)
  }
  const clearCart = () => {
    const orderedItems = cart.map(cartItem => {
      return { food_id: cartItem.id, foodName: cartItem.name, quantity: cartItem.quantity }
    })

    const orderDetails = { userEmail, orderedItems, deliveryDetails }

    fetch('https://hot-onion-restaurent-backend.herokuapp.com/placeOrder', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => setOrderId(data._id))
    console.log(orderId);
    setCart([])
  }




  const cartHandler = (data) => {
    const alreadyAdded = cart.find(crt => crt.id === data.id);
    const newCart = [...cart, data]
    setCart(newCart);
    if (alreadyAdded) {
      const reamingCarts = cart.filter(crt => cart.id !== data);
      setCart(reamingCarts);
    } else {
      const newCart = [...cart, data]
      setCart(newCart);
    }

  }

  const checkOutItemHandler = (productId, productQuantity) => {
    const newCart = cart.map(item => {
      if (item.id === productId) {
        item.quantity = productQuantity;
      }
      return item;
    })

    const filteredCart = newCart.filter(item => item.quantity > 0)
    setCart(filteredCart)
  }


  return (
    <AuthProvider>
      <Router>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Header cart={cart}></Header>
              <TopBanner></TopBanner>
              <Foods cart={cart}></Foods>
              <Features></Features>
              <Footer></Footer>
            </Route>

            <Route path="/food/:id">
              <Header cart={cart}></Header>
              <FoodDetails cart={cart} cartHandler={cartHandler}></FoodDetails>
              <Footer></Footer>
            </Route>

            <Route path="/search=:searchQuery">
              <Header cart={cart}></Header>
              <TopBanner></TopBanner>
              <SearchResult></SearchResult>
              <Features></Features>
              <Footer></Footer>
            </Route>

            <PrivateRoute path="/checkout">
              <Header cart={cart}></Header>
              <Shipment deliveryDetails={deliveryDetails} deliveryDetailsHandler={deliveryDetailsHandler} cart={cart} clearCart={clearCart} checkOutItemHandler={checkOutItemHandler} getUserEmail={getUserEmail} />
              <Footer />
            </PrivateRoute>

            <PrivateRoute path="/completeOrder">
              <Header cart={cart}></Header>
              <OrderComplete deliveryDetails={deliveryDetails} orderId={orderId}></OrderComplete>
              <Footer></Footer>
            </PrivateRoute>

            <Route path="/login">
              <SignUp></SignUp>
            </Route>

            <Route path="/inventory">
              <Header cart={cart}></Header>
              <Inventory></Inventory>
            </Route>

            <Route path="*">
              <Header cart={cart}></Header>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
