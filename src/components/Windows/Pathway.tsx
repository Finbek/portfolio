import Firefly from "../objects/Firefly/Firefly";
import styles from "./Pathway.module.scss";
import Window from "./Window";

const images = [
  "/pathway/game_background_1.png",
  "/pathway/game_background_2.png",
  "/pathway/game_background_3.png",
  "/pathway/game_background_4.png",
];

interface Props {
  onClose: () => void;
}

const Pathway: React.FC<Props> = ({ onClose }) => {
  const handleScroll = (e: any) => {
    const scrollAmount = e.target.scrollLeft;
    const sectionWidth = e.target.scrollWidth;
    const windowWidth = window.innerWidth;
    const percentage = scrollAmount / (sectionWidth - windowWidth);
    const index = Math.floor(percentage * images.length);
    // document.body.style.backgroundImage = `url(${images[index]})`;
  };

  return (
    <Window onClose={onClose}>
      {Array.from({ length: 5 }, (_, index) => (
        <Firefly />
      ))}

      <div className={styles.scrollableSection} onScroll={handleScroll}>
        {images.map((bg, i) => (
          <div key={i} className={styles.background}>
            <img src={bg} alt="" />
          </div>
        ))}
      </div>
    </Window>
  );
};

export default Pathway;
