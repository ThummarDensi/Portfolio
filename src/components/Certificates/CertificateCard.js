import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";

function CertificateCard(props) {
  return (
    <Card className="certificate-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="certificate-img" 
        className="certificate-img"
      />
      <Card.Body>
        <Card.Title>
          <FaCertificate className="certificate-badge" />
          {props.title}
        </Card.Title>
        <Card.Text className="certificate-issuer">
          <strong>Issued by:</strong> {props.issuer}
        </Card.Text>
        <Card.Text className="certificate-date">
          <strong>Earned:</strong> {props.date}
        </Card.Text>
        <Button 
          variant="primary" 
          href={props.credentialLink} 
          target="_blank"
          className="certificate-btn"
        >
          Verify Credential
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;