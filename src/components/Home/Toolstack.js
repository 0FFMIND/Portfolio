import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSlack,
  SiVercel,
    SiOculus,
} from "react-icons/si";
import {
    AiOutlineCloudServer
} from "react-icons/ai";
import {
    BsWindows,
    BsUnity,
    BsBadgeArFill,
    BsBadgeVrFill,
    
} from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
              <BsWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOculus />
      </Col>
          <Col xs={4} md={2} className="tech-icons">
              <BsBadgeArFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineCloudServer />
      </Col>
    </Row>
  );
}

export default Toolstack;
