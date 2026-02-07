import { Button, Card } from "react-bootstrap";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <Card>
        <Card.Body>
          <Button variant="primary" href={profile.contact.linkedin} className="me-2">
            LinkedIn
          </Button>
          <Button variant="dark" href={profile.contact.github} className="me-2">
            GitHub
          </Button>
          <Button variant="outline-secondary" href={`mailto:${profile.contact.email}`}>
            {profile.contact.email}
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}
