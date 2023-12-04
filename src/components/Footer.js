import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import {
    SiBilibili
} from "react-icons/si";

function Footer() {
  let date = new Date();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="3" className="footer-copywright">
          <h3>gushisun123@gmail.com</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © 2023 &nbsp;X.&nbsp;Gu.&nbsp;&nbsp;All rights reserved</h3>
        </Col>
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/0FFMIND"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://space.bilibili.com/39429643"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                          >
                              <SiBilibili />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
