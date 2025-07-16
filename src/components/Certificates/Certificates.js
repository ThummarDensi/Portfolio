import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import hackthon5 from "../../Assets/Certificates/Hackthon5.jpg";
import hackthon6 from "../../Assets/Certificates/hackthon6.0.png";
import IBM from "../../Assets/Certificates/IBM1.jpg";
import IBM1 from "../../Assets/Certificates/IBM2.jpg";
import python from "../../Assets/Certificates/Python.jpg";

function Certificates() {
  return (
    <Container fluid className="certificate-section">
      <Particle />
      <Container>
        <h1 className="certificate-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the certifications I've earned throughout my learning journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={hackthon6}
              title="HackNUThon 6.0"
              issuer="Computer Society Of India"
              date="31th March 2025"
              credentialLink="https://certificate.givemycertificate.com/c/04f924ae-9f4e-4667-bafd-22e6ad6ccdca"
            />
          </Col>
                
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={hackthon5}
              title="Hack The Mountains 5.0"
              issuer="Sudans Technocrats Foundation"
              date="9th October 2024"
              credentialLink="https://verification.givemycertificate.com/v/03be4cbf-702d-48dc-a994-019ddda233d0"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={IBM}
              title="Enterprise Data Science"
              issuer="IBM"
              date="25th January 2024"
              credentialLink="https://www.credly.com/org/ibm/badge/enterprise-data-science-in-practice.1"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={IBM1}
              title="Getting Started with Enterprise Data Science"
              issuer="IBM"
              date="24th January 2024"
              credentialLink="https://www.credly.com/org/ibm/badge/getting-started-with-enterprise-data-science.2"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={python}
              title="Python Data Structures"
              issuer="University of Michigan"
              date="9th August 2023"
              credentialLink="https://www.coursera.org/account/accomplishments/verify/GXTQY2HWW4CM"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
