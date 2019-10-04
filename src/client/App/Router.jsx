import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import Media from "@this/src/client/Routes/Media"
import Product from "@this/src/client/Routes/Product"
import Home from "@this/src/client/Routes/Home"
import Terms from "@this/src/client/Routes/Terms"
import conf from "@this/conf/conf"
import Opensurce from "@this/src/client/Routes/Products/Opensurce"

/**
 * This function is used by our sitemap generator
 * DO NOT REMOVE this method, just change routes to your needs
 * if you want to exclude some routes from sitemap just
 * add them directly inside the <Router>
 */

import Header from "./Header"
import Footer from "./Footer"

export function routePaths() {
    return <>
        <Route exact path="/" component={Home} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/terms-and-condition" component={Terms} />
        <Route exact path="/opensurce" component={Opensurce} />
        <Route exact path="/media" component={Media} />
    </>
}

export default (props) => (
    <Router basename={conf.basePath}>
        <>
            <Header></Header>
            {props.children}
            <Switch>
                {routePaths()}
            </Switch>
            <Footer></Footer>
        </>
    </Router >
);
