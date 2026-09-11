import TechnologyImage from "../../public/images/technologies/React.svg";
import CrossIcon from "../../public/images/technologies/Vector.svg";
const StackItem = () => {
  return (
    <div className="flex items-center direction-row gap-4 bg-base-100 p-4 rounded-md shadow-md justify-between">
      <div className="flex items-center gap-4">
        <img
          src={TechnologyImage}
          alt={TechnologyImage}
          className="w-16 h-16"
        />
        <div className="flex items-center flex-col gap-2">
          <h3 className="text-lg font-bold">React</h3>
          <p className="text-gray-600">Frontend</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src={CrossIcon} alt={CrossIcon} className="w-6 h-6" />
      </div>
    </div>
  );
};

export default StackItem;
