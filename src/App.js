import { Fragment, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Topnav from "./components/Topnav";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/Not-found";
import {toast} from 'react-toastify'
import Basket from "./components/Basket";
import Payment from "./components/payment";

function App() {
  const [basket, setBasket] =  useState([]);

  const newBasket = [...basket];

  const addItem = (item) => {
    if(newBasket.includes(item)) {
      toast.info(item.title + " is already in the basket");
      return;
    }
    newBasket.push(item);
    setBasket(newBasket); 
  }

  const handleRemove = (item) => {
    const cleanBasket = [...basket];
    const index = cleanBasket.indexOf(item);
    cleanBasket.splice(index, 1);
    setBasket(cleanBasket);
  } 

  const handleIncrease = (item) => {
    const cart = [...basket];
    const index = cart.indexOf(item);
    cart[index] = {...cart[index], quantity: cart[index].quantity + 1};
    setBasket(cart);
  }

  const handleDecrease = (item) => {
    const cart = [...basket];
    const index = cart.indexOf(item);
    cart[index] = {...cart[index], quantity: cart[index].quantity - 1};
    setBasket(cart);
  }



  return (
    <Fragment>
      <ToastContainer />
      <Topnav basket={basket} />
      <main className="nav-test">
        <Switch>
          <Route path="/products" render={(props) => 
            <Products onAdd={addItem} 
            {...props}/>} 
            />
          <Route path="/basket" render={(props) => 
            <Basket onIncrease={handleIncrease} 
            onDecrease={handleDecrease} 
            onRemove={handleRemove} 
            basket={basket} 
            {...props}/>} 
            />
          <Route path="/payment" component={Payment} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/product/:id" render={(props) => 
            <ProductDetails onAdd={addItem} 
            {...props}/>} 
            />
          <Route path="/not-found" component={NotFound} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
