import { Nav, NavLink, NavMenu } from "./NavbarElements.jsx";


function Navbar() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">Strona główna</NavLink>
                    <NavLink to="/App">Sklep</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;
