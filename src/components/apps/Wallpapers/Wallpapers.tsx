import Window from "@/components/Windows/Window";
import { wallpapers } from "@/data";
import useLocalStorage from "@/hooks/LocalStorage";
import styles from "./Wallpapers.module.scss";

interface Props {
  onClose: () => void;
}

const Wallpapers: React.FC<Props> = ({ onClose }) => {
  const [value, setValue] = useLocalStorage("wallpaper", 0);
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
        setValue(wallpapers.length - 1);
      } else {
        screen.style.backgroundImage = `url(wallpapers/${wallpapers[index]})`;
        setValue(index);
      }
    }
  };

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
