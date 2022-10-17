import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar dark color="dark" expand="sm">
                <div className="container">
                    <NavbarBrand href="/">Bohubrihi Restaurant</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;