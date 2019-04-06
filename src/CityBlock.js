import React from "react";
import Image from "react-bootstrap/Image";
import "./CityBlock.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CoverImage = props => {
  return (
    <Container style={{width: "70%"}}>
      <Row>
        <Col md="4" className="city-block-text nopadding">
          <span className="cityblock-text-span">Paris</span>
        </Col>
        <Col md="8" className="city-block-image nopadding">
          <Image
            src={props.img}
            style={{
              objectFit: "cover"
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CoverImage;
