import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./NavBar.css";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Chanachon Muay Thai
            </Link>
            <ul className="menu">
                <CustomLink to="/about">Our Story</CustomLink>
                <CustomLink to="/classes">Classes</CustomLink>
                <CustomLink to="/membership">Membership</CustomLink>
                <CustomLink to="/booking">Book Class</CustomLink>
                <CustomLink to="https://satrawoot.ca/" style={{color: "#f00"}}>SATRA Canada</CustomLink>
                <CustomLink to="/contact">Contact Us</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}