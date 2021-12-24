import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import AboutPage from "./pages/about-page/AboutPage";

import CartPage from "./pages/cart-page/CartPage";


import Header from "./components/header/header";
import NavMobile from "./components/nav-mobile/NavMobile";

const App = () => {
  return (
    <div className="Container">
      
      <BrowserRouter>
        <Header />
        <NavMobile />
        <Route path="/" exact component={Homepage} />
       
        <Route path="/about" component={AboutPage} />
       
       
        <Route path="/cart/:id" component={CartPage}/> 
      </BrowserRouter>
    </div>
  );
};

export default App;
