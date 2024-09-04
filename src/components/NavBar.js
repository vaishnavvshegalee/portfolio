import { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.screenY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }
    const letsConnect = () => {
        document.getElementById('connect').scrollIntoView({ behavior: "smooth" });
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/vaishnav-shegale-030620157"><img src={navIcon1} alt="navIcon1" /></a>
                            <a href="https://github.com/vaishnavvshegalee"><img src={navIcon2} alt="navIcon2" /></a>
                        </div>
                        <button className="vvd" onClick={letsConnect
                        } ><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}