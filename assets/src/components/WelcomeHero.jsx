import { Container } from "react-bootstrap";
import { profile } from "../data/profile";
import "../styles/WelcomeHero.css";

export default function WelcomeHero() {
  const roles =
    profile?.heroRoles ?? ["ENGENHEIRO DE DADOS", "CIENTISTA DE DADOS", "ARQUITETO DE DADOS"];

  const scrollToAbout = (e) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (!el) return;

    const offset = 66; // altura da navbar/header fixo
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="welcome-hero"
      className="welcome-hero"
      style={{
        backgroundImage: `url("/assets/images/hero/welcome-banne_02.jpg")`,
      }}
    >
      {/* overlay + gradient para ficar como a imagem */}
      <div className="welcome-overlay" />

      <Container className="welcome-inner">
        <div className="welcome-content text-center">
          <p className="welcome-kicker">OLÁ, SEJA BEM VINDO!</p>

          <h1 className="welcome-title">
            Eu sou
            <span className="welcome-name"> Diego Bezerra</span>
          </h1>

          <div className="welcome-roles" aria-label="Roles">
            {roles.map((r, idx) => (
              <span key={r} className="welcome-role">
                {idx > 0 && <span className="role-sep">|</span>}
                {r}
              </span>
            ))}
          </div>

          <a className="welcome-cta" href="#about" onClick={scrollToAbout}>
            <span>SOBRE MIM</span>
            <span className="cta-arrow" aria-hidden="true">▾</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
