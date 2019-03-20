import React from "react";
import { Link } from "react-router-dom";
import Router from "./Router"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faRssSquare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import conf from "@this/conf/conf"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

library.add(faHome, faRssSquare, faExternalLinkAlt);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    window.prerenderReady = true;
  }

  render() {
    return (
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href={conf.basePath}>HyperWeb2</NavbarBrand>
          <NavbarToggler onClick={this.toggle} aria-label="navbar-toggler" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/" tag={Link}><FontAwesomeIcon icon="home" /> HyperWeb2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Servizi/" tag={Link}><FontAwesomeIcon icon="rss-square" /> Servizi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Contatti-social/" tag={Link}>Contatti & social</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Prodotti" tag={Link}>Prodotti <FontAwesomeIcon icon="external-link-alt" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Media" tag={Link}>Media <FontAwesomeIcon icon="external-link-alt" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Blog" tag={Link}>Blog <FontAwesomeIcon icon="external-link-alt" /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Router>
    )
  }
};

export default App;