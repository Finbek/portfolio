import AppBox from "../AppBox/AppBox";
import DragAndDrop from "../DnD/DnD";
import style from "./Menu.module.scss";

const MenuLayout = ({ appBoxes }: any) => {
  return (
    <div className={style["menu-container"]}>
      <div className={style["menu-grid"]}>
        {appBoxes?.map((box: any, index: number) => (
          <DragAndDrop
            initialPosition={{
              x: (index % 4) * 20 + 10 + "%",
              y: Math.floor(index / 4) * 20 + 10 + "%",
            }}
            key={box.title}
          >
            <AppBox apps={box.apps} title={box.title} />
          </DragAndDrop>
        ))}
      </div>
    </div>
  );
};

export default MenuLayout;
