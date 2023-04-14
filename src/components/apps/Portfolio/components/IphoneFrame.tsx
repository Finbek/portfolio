import s from "./IphoneFrame.module.scss";

const IphoneFrame = () => {
  return (
    <div className={s.contain}>
      <div className={s["phonebody-external"]}>
        <div className={s["phonebody-internal"]} id="iphone-frame">
          <div className={s.top}>
            <div className={s.speaker}></div>
            <div className={s.circle}></div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default IphoneFrame;
