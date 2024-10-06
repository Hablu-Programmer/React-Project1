import { Col, Row } from "react-bootstrap";
import { SectionTitle } from "./common/title";

const bestSellingItems = [
  {
    img: "/best-selling-1.png",
    name: "Subaru",
    price: "$40k",
  },
  {
    img: "/best-selling-1.png",
    name: "Volkswagen",
    price: "$15k",
  },
  {
    img: "/best-selling-1.png",
    name: "Toyota",
    price: "$27k",
  },
  {
    img: "/best-selling-1.png",
    name: "Mercedes-Benz",
    price: "$60k",
  },
  {
    img: "/best-selling-1.png",
    name: "Hyundai",
    price: "$30k",
  },
  {
    img: "/best-selling-1.png",
    name: "Infiniti",
    price: "$54k",
  },
];

export const BestSelling = () => {
  return (
    <div className="container" style={{ paddingTop: "86px" }}>
      <SectionTitle>Trending near you</SectionTitle>

      <Row
        style={{ paddingTop: "50px" }}
        className="d-flex justify-content-center"
      >
        {bestSellingItems.map(({ img, name, price }, i) => (
          <Col md={4} key={i}>
            <div className="vw-ad">
              <img
                src={img}
                alt="Volkswagen Logo"
                className="vw-logo w-[100px]"
              />
              <div>
                <div className="vw-text">{name}</div>
                <div className="vw-price">from {price}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
