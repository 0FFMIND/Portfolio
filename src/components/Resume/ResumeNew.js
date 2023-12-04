import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
              {/* <Row style={{ justifyContent: "center", position: "relative" }}>
                  <h3 style={{ letterSpacing:2, }}>Here is my                                 <i>
                      <b className="purple">CV </b>
                  </i>; The                                 <i>
                          <b className="purple"> DOWNLOAD</b>
                      </i> button is located at the bottom.</h3>
        </Row> */}

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
                      <Page pageNumber={1} scale={width > 786/2 ? 1.7/2 : 0.6/2} />
                      <Page pageNumber={2} scale={width > 786/2 ? 1.7/2 : 0.6/2} />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "180px" }}
          ><div style={{ color: "#ffffff" }}>
                      <AiOutlineDownload />
                      &nbsp;Download CV</div>
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
