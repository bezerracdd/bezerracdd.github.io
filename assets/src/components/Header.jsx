import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

const navItems = [
  { id: "intro", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "resume", label: "Resumo" },
  { id: "portfolio", label: "Portfólio" },
  { id: "services", label: "Serviços" },
  { id: "contact", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // fecha com ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // trava scroll do body quando abre (opcional, mas fica profissional)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 66; // altura da barra superior
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Top bar (sempre visível) */}
      <header className={styles.topHeader}>
        <div className={styles.topInner}>
          <button
            type="button"
            className={`${styles.iconButton} ${open ? styles.isOpen : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={styles.burger} />
          </button>

          <a href="#intro" className={styles.brand} onClick={scrollToId("intro")}>
            Diego Bezerra
          </a>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayShow : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Side panel */}
      <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <nav className={styles.drawerNav} aria-label="Main navigation">
          <ul className={styles.drawerList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.drawerItem}>
                <a
                  href={`#${item.id}`}
                  className={styles.drawerLink}
                  onClick={scrollToId(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
