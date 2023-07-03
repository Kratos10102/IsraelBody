import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Instagram } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";


function NavigationBar() {
  return (
    // bg="varient" let's the navbar be transparent.

<div className="container-navbar">
  <Navbar bg="varient" expand="lg">
  <Link to="/" className="nav-link" >
    <Navbar.Brand className="navbar-brand">IsraelBody</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <div className="nav-container" id="NavbarLinks">
        <Nav id="navbarParagraph" >
          <Link to="/" className="nav-link">דף בית</Link>
          <Link to="/trainers" className="nav-link">יועצים</Link>
          <Link to="/stores" className="nav-link">סניפים</Link>
          <Link to="/about" className="nav-link">אודות</Link>
        </Nav>
      </div>
      <div className="nav-container">
        <Nav id="navbarParagraph">
          <Nav.Link href="https://www.instagram.com/israelbody/" className="nav-link" id="instagram">
            <Instagram />
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com/IsraelBody.org/" className="nav-link" id="facebook">
            <FacebookIcon />
          </Nav.Link>
          <Nav.Link href="https://wa.me/972586929029/" className="nav-link" id="whatsup">
            <WhatsAppIcon />
          </Nav.Link>
        </Nav>
      </div>
    </Navbar.Collapse>
  </Navbar>
</div>


  );
}

export default NavigationBar;
