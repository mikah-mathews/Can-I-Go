import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/review/new">New Review</Link>
              <Link to="/reviews">All Reviews</Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Find a Business"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;