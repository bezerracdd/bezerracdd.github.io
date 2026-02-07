import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <div className="text-center mb-4">
          <SectionTitle>{profile.about.title}</SectionTitle>
        </div>

        <Row className="g-4 align-items-start">
          {/* Texto */}
          <Col lg={7}>
            <Card className="shadow-sm">
              <Card.Body>
                {profile.about.paragraphs.map((p, idx) => (
                  <p key={idx} className="mb-3">
                    {p}
                  </p>
                ))}

                <Row className="g-3 mt-4">
                  {profile.about.contactCards.map((c) => (
                    <Col sm={4} key={c.label}>
                      <div className="border rounded p-3 h-100">
                        <div className="text-uppercase text-muted small fw-semibold">
                          {c.label}
                        </div>
                        <div className="fw-semibold">{c.value}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Imagem + Social */}
          <Col lg={5}>
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <img
                  src={profile.images.profile}
                  alt="profile"
                  style={{
                    width: "100%",
                    maxWidth: 320,
                    borderRadius: 16,
                    objectFit: "cover"
                  }}
                />

                <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                  {profile.social.map((s) => (
                    <Button
                      key={s.label}
                      variant="outline-dark"
                      size="sm"
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.label}
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
