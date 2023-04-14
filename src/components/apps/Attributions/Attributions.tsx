import Window from "@/components/Windows/Window";
import { attributes } from "@/data";

interface Props {
  onClose: () => void;
}
const Attributions: React.FC<Props> = ({ onClose }) => {
  return (
    <Window onClose={onClose}>
      <div className="bg-gradient-to-tl from-lime-500 to-teal-500 w-[95vw] h-[95vh]">
        <div className="flex flex-col items-center p-7 max-h-[90vh] overflow-y-auto ">
          <h1 className="text-5xl text-white font-bold mb-4">Attributions</h1>
          <ul className="flex flex-col gap-3 list-decimal">
            {attributes.map((attribution, index) => (
              <li key={index} className="flex flex-row items-center gap-6">
                <div>
                  <img
                    src={attribution.imageIcon}
                    alt={`Image ${index + 1}`}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <p>
                    <a
                      href={attribution.imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline hover:text-[#f9f871]"
                    >
                      {attribution.imageSrc}
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-2xl mt-4 text-center text-white">
            I'm happy to provide attribution details upon request. Please
            contact me for proper credit.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default Attributions;
