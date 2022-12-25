import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="ms">
      <Navbar.Brand as={Link} to="/">
        FilesStorage
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
          My Profile 
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
