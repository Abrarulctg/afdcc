import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './compunents/Home/Home';
import Header from './compunents/Header/Header';
import { AuthContextProvider } from './compunents/useAuth/useAuth';
import PlaceOrder from './compunents/PlaceOrder/PlaceOrder';
import SignUp from './compunents/Signup/Signup';
import CompleteOrder from './compunents/CompleteOrder/CompleteOrder';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/order">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/completeOrder">
            <CompleteOrder></CompleteOrder>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </AuthContextProvider>

    </div>
  );
}

export default App;
