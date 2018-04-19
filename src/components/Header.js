import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => (
    // <header>
    //     <h1>Expensify</h1>
    //     <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    //     <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    //     <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    // </header>

    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <NavLink to="/" activeClassName="is-active" exact={true}><span>Auto<img width="30px" height="30px" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/57/car-512.png"/>Lease</span></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to="/create">
                    <NavItem eventKey={1}>
                        Create
                    </NavItem>
                </LinkContainer>
                <LinkContainer to ="/help">
                    <NavItem eventKey={2}>
                        Help
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
); 

export default Header;

