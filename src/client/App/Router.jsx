import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import Blog from "@this/src/client/Routes/Blog/List"
import Post from "@this/src/client/Routes/Blog/Post"
import Media from "@this/src/client/Routes/Media"
import Prodotti from "@this/src/client/Routes/Prodotti"
import Contatti from "@this/src/client/Routes/Contatti"
import Servizi from "@this/src/client/Routes/Servizi"


import conf from "@this/conf/conf"

/**
 * This function is used by our sitemap generator
 * DO NOT REMOVE this method, just change routes to your needs
 * if you want to exclude some routes from sitemap just
 * add them directly inside the <Router>
 */


export default (props) => (
    <Router basename={conf.basePath}>
        <div>
            {props.children}
            <Switch>
        <Route exact path="/media" component={Media} />
        <Route exact path="/prodotti" component={Prodotti} />
        <Route exact path="/Contatti-social" component={Contatti} />
        <Route exact path="/servizi" component={Servizi} />
      
        <Route exact path="/blog/" component={Blog} />
        <Route path="/blog/:id" component={Post} />
    </Switch>
        </div>
    </Router >
);