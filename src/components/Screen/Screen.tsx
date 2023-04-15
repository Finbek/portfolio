import { appBoxes, wallpapers } from "@/data";
import useLocalStorage from "@/hooks/LocalStorage";
import { useEffect, useState } from "react";
import Dock from "../Dock/Dock";
import MenuLayout from "../Menu/Menu";
import Topbar from "../Topbar/Topbar";

const Screen = () => {
  const [value] = useLocalStorage("wallpaper", 1);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) {
    return null;
  }
  return (
    <div
      className="flex flex-col h-[100vh] overflow-hidden"
      style={{
        backgroundImage: `url(wallpapers/${wallpapers[value]})`,
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
