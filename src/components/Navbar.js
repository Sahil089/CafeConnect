import React from 'react'
import {Container,Nav, Navbar} from "react-bootstrap"
import logo from "../assests/logo.png"
import "../styles/Middle.css"

function Navb() {
  return (
    <div>
        <Navbar id="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><img class="logo1" src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#pricing">Home</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="" id="txt">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navb