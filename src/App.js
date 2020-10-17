import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioList from "./components/PortofolioList";
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
    return ( 
    <div id = "page-top" >
    <BrowserRouter>
        <switch>
            <Route path="/" component={Navbar} key="/" />
            <Route path="/" component={Hero} key="/" />
            <Route path="/" component={PortofolioList} key="/" />
            <Route path="/" component={About} key="/" />
            <Route path="/" component={Contact} key="/" />
        </switch>
    </BrowserRouter>
    </div>
    );
}

export default App;