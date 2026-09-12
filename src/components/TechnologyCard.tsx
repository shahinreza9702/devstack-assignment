import StarRating from "../../public/images/technologies/Star-Rating.svg";
import type { Technology } from "../types/technology";
import { badgeColors } from "../types/badgeColors";
interface TechnologyCardProps {
  technology: Technology;
  isInStack: boolean;
  onAdd: () => void;
}

const TechnologyCard = ({
  technology,
  isInStack,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="bg-base-100 p-6 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} technology icon`}
          className="w-16 h-16 object-contain"
        />

        <span
          className={`badge ${
            badgeColors[technology.badge] || badgeColors.default
          } border rounded-4xl px-4 py-2 text-white`}
        >
          {technology.badge}
        </span>
      </div>

      <h2 className="text-lg font-semibold mt-4">{technology.name}</h2>

      <p className="text-gray-600 mt-2 text-md leading-relaxed">
        {technology.description}
      </p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-500">{technology.category}</span>

        <span className="text-sm text-gray-500">{technology.difficulty}</span>

        <div className="flex items-center">
          <img src={StarRating} alt="Star rating" className="w-6 h-6" />
          <span className="text-sm text-gray-500 ml-2">
            {technology.rating}/5
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onAdd}
        disabled={isInStack}
        className={`w-full font-bold py-2 px-4 rounded-lg mt-4 transition-colors duration-200 ${
          isInStack
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-black hover:bg-gray-700 text-white"
        }`}
      >
        {isInStack ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
