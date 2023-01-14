import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Form, Link } from 'react-router-dom';

const Header = () => {
    return (
       <div>
         <Navbar bg="light" expand="lg" className='container-md container-fluid-sm'>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='ml-auto'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          <LinkContainer to='/registration'>
            <Nav.Link href="#action1">Registration</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login'>
            <Nav.Link href="#action1">Log In</Nav.Link>
          </LinkContainer>  
          </Nav>
          
        </Navbar.Collapse>
    </Navbar>            
      </div>
    );
};

export default Header;