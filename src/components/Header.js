import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap'
import {Nav, Navbar, Image} from 'react-bootstrap';

const Header = ({titulo}) => {
    return (
        <Fragment>
            <Navbar className="navbar-header" fixed="top" bg="dark" variant="dark" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Image src="{logo}" roundedCircle />
                        <span>{titulo}</span>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Inicio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/nosotros">
                            <Nav.Link>Nosotros</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="#link">Cont&aacute;ctanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
    ubicacionLogo: PropTypes.string.isRequired
};

export default Header;