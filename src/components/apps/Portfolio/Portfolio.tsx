import Window from "@/components/Windows/Window";
import styles from "./Portfolio.module.scss";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Who from "./components/Who";
import Works from "./components/Works";
interface Props {
  onClose: () => void;
}

const Portfolio: React.FC<Props> = ({ onClose }) => {
  return (
    <Window onClose={onClose}>
      <div className={styles.container}>
        <Hero />
        <Who />
        <Skills />
        <Works />
        <Contact />
      </div>
    </Window>
  );
};
export default Portfolio;
