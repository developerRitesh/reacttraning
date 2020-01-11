import React from 'react';
import Homepage from './page/Homepage.js';
import About from './page/About.js';
import Error from "./page/Error.js";
import Contact from './page/Contact.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
          <Header/>
          <div className="page">
              <Switch>
                <Route exact path="/"><Homepage/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route component={Error} />
              </Switch>
          </div>
          <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
