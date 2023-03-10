import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg" style={{position: 'fixed', width: '100%', zIndex: '1'}}>
              <Container fluid>
                <Navbar.Brand href="#">City Explorer</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                        onChange={this.props.getTargetInfo}
                      type="text"
                      placeholder="Seattle"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button onClick={this.props.search}  variant="outline-success">Explore!</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );    }
}

export default Header
