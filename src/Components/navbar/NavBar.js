import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./NavBar.css";
import logoItems from "../../assets/Logo_WIDE_CHANACHON.svg"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <img src={logoItems} alt="logoItems" width={"210px"} height={"70px"} />
            </Link>
            <ul className="menu">
                {/* <CustomLink to="/about">OUR STORY</CustomLink> */}
                {/* <CustomLink to="/classes">PROGRAMS</CustomLink> */}
                <CustomLink to="https://chanachonmuaythai.zenplanner.com/zenplanner/portal/sign-up-now.cfm">MEMBERSHIPS</CustomLink>
                <CustomLink to="https://chanachonmuaythai.sites.zenplanner.com/calendar.cfm">BOOK CLASS</CustomLink>
                {/* <CustomLink to="/">OUR TEAM</CustomLink> */}
                <CustomLink to="https://satrawoot.ca/" style={{color: "#f00"}}>SATRA CANADA</CustomLink>
                {/* <CustomLink to="/contact">CONTACT US</CustomLink> */}
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