import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [active, updateActive] = useState(0)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={{background: "#0ba1a4 ", padding: "0 0.75rem"}}
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" style={{display: "flex", alignItems: "center", gap: "6px"}}>
            {/* <Image preview={false} width={"40px"} height={"40px"} src={homeLogo} alt="My Image" /> */}
            <span>Xingci Gu</span>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className={active === 0 ? "nav-item-active" : ""}>
              <Nav.Link as={Link} to="/" onClick={() => {
                updateExpanded(false);
                updateActive(0)
              }}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={active === 1 ? "nav-item-active" : ""}>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => {
                  updateExpanded(false);
                  updateActive(1)
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={active === 2 ? "nav-item-active" : ""}>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {
                  updateExpanded(false);
                  updateActive(2)
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Work
              </Nav.Link>
                      </Nav.Item>

              <Nav.Item className={active === 3 ? "nav-item-active" : ""}>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => {
                  updateExpanded(false);
                  updateActive(3)
                }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
                      </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
