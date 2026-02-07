import { Badge, Card } from "react-bootstrap";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="mb-5">
      <SectionTitle>Skills</SectionTitle>
      <Card>
        <Card.Body className="d-flex flex-wrap gap-2">
          {profile.skills.map(skill => (
            <Badge key={skill} bg="secondary">
              {skill}
            </Badge>
          ))}
        </Card.Body>
      </Card>
    </section>
  );
}
