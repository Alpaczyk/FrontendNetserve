import { Nav, NavLink, NavMenu } from "./NavbarElements.jsx";


function Navbar() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">Strona główna</NavLink>
                    <NavLink to="/Shop">Sklep</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;
