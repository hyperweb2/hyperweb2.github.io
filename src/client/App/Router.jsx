import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import Media from "@this/src/client/Routes/Media"
import Prodotti from "@this/src/client/Routes/Prodotti"
import Home from "@this/src/client/Routes/Home"

import conf from "@this/conf/conf"

/**
 * This function is used by our sitemap generator
 * DO NOT REMOVE this method, just change routes to your needs
 * if you want to exclude some routes from sitemap just
 * add them directly inside the <Router>
 */

import Header from "./Header"
import Footer from "./Footer"


export default (props) => (
    <Router basename={conf.basePath}>
        <>
            <Header></Header>
            {props.children}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/prodotti" component={Prodotti} />
                <Route exact path="/media" component={Media} />
            </Switch>
            <Footer></Footer>
        </>
    </Router >
);