import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import Blob from "./mini-components/Blob";
class Header extends Component {
  render() {
    const { data } = this.props;
    if (data) {
      var { name, occupation, description, tagline } = data;
      var { city, country } = data.address;
    }

    return (
      <header>
        <div className="header-selction">
          <Nav fill className="nav-container">
            <NavItem className="current">
              <NavLink className="smoothscroll" href="#home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="smoothscroll" href="#about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="smoothscroll" href="#resume">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="smoothscroll" href="#portfolio">
                Works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="smoothscroll" href="#testimonials">
                Testimonials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="smoothscroll" href="#contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="row banner">
          <div className="header-section-inner">
            <h1 className="responsive-headline">I'm {name}</h1>
            <h2>
              <strong>{tagline}</strong>
              <br />
              <div className="location">
                @ {city},{country}
              </div>
            </h2>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
