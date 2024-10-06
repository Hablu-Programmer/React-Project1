import { Button, Card, Col, Row } from "react-bootstrap";
import { SectionTitle } from "./common/title";

export const Trending = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      <SectionTitle>Trending near you</SectionTitle>

      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <Card style={{ width: "25rem", border: "none" }}>
            <Card.Img variant="top" src="/trending-card-img.png" />
            <Card.Body>
              <Card.Title>Used 2019 Audi S4 Premium Plus</Card.Title>
              <Card.Text className="opacity-50">11 475 Miles</Card.Text>
              <Card.Text className="opacity-50">
                AWD . 4-Cylinder Turbo
              </Card.Text>
              <div className="d-flex flex-row gap-3">
                <Button variant="primary" className="fw-bold">
                  $41,400
                </Button>
                <Button variant="secondary" className="fw-bold">
                  Bestseller
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: "25rem", border: "none" }}>
            <Card.Img variant="top" src="/trending-card-img.png" />
            <Card.Body>
              <Card.Title>Used 2019 Audi S4 Premium Plus</Card.Title>
              <Card.Text className="opacity-50">11 475 Miles</Card.Text>
              <Card.Text className="opacity-50">
                AWD . 4-Cylinder Turbo
              </Card.Text>
              <div className="d-flex flex-row gap-3">
                <Button variant="primary" className="fw-bold">
                  $41,400
                </Button>
                <Button variant="secondary" className="fw-bold">
                  Bestseller
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: "25rem", border: "none" }}>
            <Card.Img variant="top" src="/trending-card-img.png" />
            <Card.Body>
              <Card.Title>Used 2019 Audi S4 Premium Plus</Card.Title>
              <Card.Text className="opacity-50">11 475 Miles</Card.Text>
              <Card.Text className="opacity-50">
                AWD . 4-Cylinder Turbo
              </Card.Text>
              <div className="d-flex flex-row gap-3">
                <Button variant="primary" className="fw-bold">
                  $41,400
                </Button>
                <Button variant="secondary" className="fw-bold">
                  Bestseller
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
