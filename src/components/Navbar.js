import React from "react"
import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import CartWidget from "./CartWidget";


const Navbar = () =>{
    return(
        <> 
        <Navbar
            color="dark"
            dark
            expand="md"
            fixed="top"
        >
            <NavbarBrand href="/">
            reactstrap
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                <NavLink href="/components/">
                    Components
                </NavLink>
                </NavItem>
                <UncontrolledDropdown
                inNavbar
                nav
                >
                <DropdownToggle
                    caret
                    nav
                >
                    Productos
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Mujer
                    </DropdownItem>
                    <DropdownItem>
                    Hombre
                    </DropdownItem>
                    <DropdownItem>
                    Niños
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
            <CartWidget></CartWidget>
        </Navbar>
        </>
    )
}

export default Navbar;