import Window from "@/components/Windows/Window";
import { wallpapers } from "@/data";
import styles from "./Wallpapers.module.scss";

interface Props {
  onClose: () => void;
}

const Wallpapers: React.FC<Props> = ({ onClose }) => {
  const handleScroll = (e: any) => {
    const scrollAmount = e.target.scrollLeft;
    const sectionWidth = e.target.scrollWidth;
    const windowWidth = window.innerWidth;
    const percentage = scrollAmount / (sectionWidth - windowWidth);
    const index = Math.floor(percentage * wallpapers.length);
    const screen = document.getElementById("screen");

    if (screen) {
      if (index === wallpapers.length) {
        screen.style.backgroundImage = `url(wallpapers/${
          wallpapers[wallpapers.length - 1]
        })`;
      } else {
        screen.style.backgroundImage = `url(wallpapers/${wallpapers[index]})`;
      }
    }
  };
  document.getElementById(
    "screen"
  )!.style.backgroundImage = `url(wallpapers/${wallpapers[0]})`;
  return (
    <Window onClose={onClose}>
      <div>
        <div className={styles.scrollableSection} onScroll={handleScroll}>
          {wallpapers.map((bg, i) => (
            <div key={i} className={styles.background}>
              <img src={`wallpapers/${bg}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default Wallpapers;
