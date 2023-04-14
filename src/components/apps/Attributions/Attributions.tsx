import Window from "@/components/Windows/Window";

interface Props {
  onClose: () => void;
}
const Attributions: React.FC<Props> = ({ onClose }) => {
  return (
    <Window onClose={onClose}>
      <div className="w-[95vw] h-[95vh] bg-white">
        <div>
          {" "}
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            {" "}
            Freepik{" "}
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com'
          </a>
        </div>
      </div>
    </Window>
  );
};

export default Attributions;
