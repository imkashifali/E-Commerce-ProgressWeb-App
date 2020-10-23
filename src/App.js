import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import Payment from "./Payment";
import Orders from "./Orders";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Promise = loadStripe(
  "pk_test_51HefpYGYHd2iMP2dQTQ72MicvvoKk9psBkoyY3X3LYSKgHzFlPsJ0t9zEBQ5ZUzQsKRklQi3nOLYqJ5qJBJZAVlS00j0NFqzig"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //It will run only once when the app component Loads..

    auth.onAuthStateChanged((authUser) => {
      console.log("The User is Auth", authUser);

      if (authUser) {
        //the user just logged in/// the user was logged
        dispatch({
          type: "set_User",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "set_User",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM Conv
    <Router>
      <div className="app">
        <Switch>

        <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={Promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
