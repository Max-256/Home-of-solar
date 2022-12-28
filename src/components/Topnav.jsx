import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getNavItems } from "../services/navItems";
import "bootstrap/dist/css/bootstrap.min.css";
import {RiShoppingCart2Line} from 'react-icons/ri';

function Topnav({basket}) {
  const [navItems, setNavItems] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() =>setNavItems(getNavItems()),[]);

  return (
    <Navbar expanded={expanded} className="navbar" expand="lg" fixed="top" >
      <Container>
        <Link to="/">
        <img onClick={() => setExpanded(false)} src={logo} alt="logo"/>
        </Link>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {
              (basket.length > 0) && 
              <Link to="/basket" className="cart-logo" 
                onClick={() => setExpanded(false)}>
                <span ><RiShoppingCart2Line /></span> 
                <span className="badge-white">{basket.length}</span>
              </Link>              
            }
            {
              navItems.map((item) => (
              <NavLink
                key={item.id}
                onClick={() => setExpanded(false)}
                className="nav nav-link"
                activeClassName="active"
                to={item.path}
              >
                {item.component}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnav;
