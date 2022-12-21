import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {CiCoffeeCup} from 'react-icons/ci';

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' >
      <Navbar.Brand href="#home" >
        <CiCoffeeCup size={30}/>
        DevCoffee
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav-" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" >Home</Nav.Link>
        <Nav.Link href="#clientes" >Clientes</Nav.Link>
        <Nav.Link href="#produtos" >Produtos</Nav.Link>
        <Nav.Link href="#entregadores" >Entregadores</Nav.Link>
        <Nav.Link href="#fornecedores" >Fornecedores</Nav.Link>
    </Nav>
      </Navbar.Collapse>
    </Navbar>
  ); 
}

export default Header;