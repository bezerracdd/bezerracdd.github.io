import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="mb-5">
      <SectionTitle>Projects</SectionTitle>

      <Row className="g-3">
        {profile.projects.map(project => (
          <Col md={6} key={project.name}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.desc}</Card.Text>

                <div className="mb-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} bg="info" className="me-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline-primary"
                  size="sm"
                  href={project.link}
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
