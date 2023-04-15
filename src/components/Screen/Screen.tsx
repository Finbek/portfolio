import { appBoxes, wallpapers } from "@/data";
import { getRandomInt } from "@/utils";
import Dock from "../Dock/Dock";
import MenuLayout from "../Menu/Menu";
import Topbar from "../Topbar/Topbar";

const Screen = () => {
  const bg = wallpapers[getRandomInt(wallpapers.length - 1)];

  return (
    <div
      className="flex flex-col h-[100vh] overflow-hidden"
      style={{
        backgroundImage: `url(wallpapers/${bg})`,
        backgroundSize: "cover",
      }}
      id="screen"
    >
      <Topbar />

      <MenuLayout appBoxes={appBoxes} />
      <Dock />
    </div>
  );
};

export default Screen;
