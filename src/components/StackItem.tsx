import CrossIcon from "../../public/images/technologies/Vector.svg";
import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: () => void;
}

const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center direction-row gap-4 bg-base-100 p-4 rounded-md shadow-md justify-between">
      <div className="flex items-center gap-4">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-16 h-16"
        />
        <div className="flex items-center flex-col gap-2">
          <h3 className="text-lg font-bold">{technology.name}</h3>
          <p className="text-gray-600">{technology.category}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="p-2 rounded hover:bg-gray-100"
        aria-label={`Remove ${technology.name}`}
      >
        <img src={CrossIcon} alt="Remove" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default StackItem;
