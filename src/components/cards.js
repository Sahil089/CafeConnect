import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import c7 from "../assests/c7.jpg";
import six from "../assests/six.jpeg";
import ram from "../assests/ram.jpeg";
import "../styles/main.css"

function Cards() {
  return (
    <Container id="con">
      <Row>
      <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ram} />
            <Card.Body className="txt1">
              <Card.Title className="title">Ram Bhandar</Card.Title>
              <Card.Text className="titletxt" >
              Easygoing restaurant offering South Indian dishes, as well as international options & sweet treats.
              </Card.Text>
              <Button target="_blank" href="https://cafesydney.com/explore-our-venue/virtual-tour?p=t" className="color" variant="primary">V</Button>
              <Button target="_blank" href="https://www.roblox.com/games/12991119129/" className="color" variant="primary">G</Button>
              <Button href="" className="color" variant="primary">C</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ram} />
            <Card.Body className="txt1">
              <Card.Title className="title">Card Title</Card.Title>
              <Card.Text className="titletxt">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button  className="color" variant="primary">V</Button>
              <Button  className="color" variant="primary">G</Button>
              <Button  className="color" variant="primary">C</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={six} />
            <Card.Body className="txt1">
              <Card.Title className="title" >Card Title</Card.Title>
              <Card.Text className="titletxt" >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button  className="color" variant="primary">V</Button>
              <Button  className="color" variant="primary">G</Button>
              <Button  className="color" variant="primary">C</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ram} />
            <Card.Body className="txt1">
              <Card.Title className="title">Card Title</Card.Title>
              <Card.Text className="titletxt" >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button  className="color" variant="primary">V</Button>
              <Button  className="color" variant="primary">G</Button>
              <Button  className="color" variant="primary">C</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ram} />
            <Card.Body className="txt1">
              <Card.Title className="title">Card Title</Card.Title>
              <Card.Text className="titletxt">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button  className="color" variant="primary">V</Button>
              <Button  className="color" variant="primary">G</Button>
              <Button  className="color" variant="primary">C</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={six} />
            <Card.Body className="txt1">
              <Card.Title className="title" >Card Title</Card.Title>
              <Card.Text className="titletxt" >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button  className="color" variant="primary">V</Button>
              <Button  className="color" variant="primary">G</Button>
              <Button  className="color" variant="primary">C</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
