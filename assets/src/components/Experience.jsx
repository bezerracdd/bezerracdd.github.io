import { Card } from "react-bootstrap";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="mb-5">
      <SectionTitle>Experience</SectionTitle>

      {profile.experience.map(exp => (
        <Card key={exp.title} className="mb-3">
          <Card.Body>
            <Card.Title>{exp.title}</Card.Title>
            <Card.Subtitle className="text-muted">
              {exp.company} — {exp.period}
            </Card.Subtitle>
            <ul className="mt-3">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}
