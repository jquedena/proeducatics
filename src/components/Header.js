import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar, Image} from 'react-bootstrap';
import logo from './../images/logo.png';

const Header = ({titulo}) => {
    return (
        <Fragment>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <Image src={logo} roundedCircle />
                    <span>{titulo}</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <Nav.Link href="#link">Cont&aacute;ctanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
};

export default Header;