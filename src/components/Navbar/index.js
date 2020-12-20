import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, 
NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'


function Navbar() {
    return (
        <>

            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Kamil Marczak </NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Skills</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign in</NavBtnLink>
                    </NavBtn>
            
                </NavbarContainer>
            </Nav>
 
        </>
    )
}

export default Navbar
