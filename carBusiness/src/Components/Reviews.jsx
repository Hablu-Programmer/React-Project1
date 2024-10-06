import { Col, Row } from "react-bootstrap";
import { SectionTitle } from "./common/title";

const reviews = [
  {
    img: "/review-1.png",
    content:
      "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
    user: {
      img: "/avatar-1.png",
      name: "Hironaka Hiroe",
      position: "Chief Editor",
      stars: 4.91,
      total: 98,
    },
  },
  {
    img: "/review-1.png",
    content:
      "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
    user: {
      img: "/avatar-1.png",
      name: "Hironaka Hiroe",
      position: "Chief Editor",
      stars: 4.91,
      total: 98,
    },
  },
  {
    img: "/review-1.png",
    content:
      "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
    user: {
      img: "/avatar-1.png",
      name: "Hironaka Hiroe",
      position: "Chief Editor",
      stars: 4.91,
      total: 98,
    },
  },
];

export const Reviews = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      <SectionTitle>Recent reviews</SectionTitle>

      <Row
        style={{ paddingTop: "54px" }}
        className="d-flex justify-content-center"
      >
        {reviews.map(({ img, content, name, user }, i) => (
          <Col key={i} md={4}>
            <div className="card border-0" style={{ width: "25rem" }}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bolder">{name}</h5>
                <p className="card-text opacity-50">{content}</p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={user.img}
                    alt=""
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: " 50px" }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-0 fw-bold">{user.name}</h6>
                    <small className="text-muted">{user.position}</small>
                  </div>
                  <div className="d-flex align-items-center ms-auto">
                    <span className="text-warning fw-bold">★</span>
                    <span className="ms-1 fw-bold">{user.stars}</span>
                    <span className="text-muted ms-2">({user.total})</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};