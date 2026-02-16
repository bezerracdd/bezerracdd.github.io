import styles from "../styles/App.module.css";

import About from "../components/template/About.jsx";
import Footer from "../components/template/Footer.jsx";
import Header from "../components/template/Header.jsx";
import WelcomeHero from "../components/template/WelcomeHero.jsx";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <WelcomeHero />
      <About />
      <Footer />
    </div>
  );
}
