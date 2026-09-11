import TechnologImage from "../../public/images/technologies/React.svg";
import StarRating from "../../public/images/technologies/Star-Rating.svg";
const TechnologyCard = () => {
  return (
    <div className="bg-base-100 p-6 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <img
          src={TechnologImage}
          alt="React technology icon"
          className="w-16 h-16 object-contain"
        />

        <span className="text-sm text-[#0EA5E9] border border-[#E0F2FE] bg-[#F0F9FF] rounded-full px-4 py-1">
          React
        </span>
      </div>

      <h2 className="text-lg font-semibold mt-4">React</h2>

      <p className="text-gray-600 mt-2 text-md leading-relaxed">
        A declarative, component-based JavaScript library for building modern
        user interfaces.
      </p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-500">Frontend</span>

        <span className="text-sm text-gray-500">Beginner-Friendly</span>

        <div className="flex items-center">
          <img src={StarRating} alt="Star rating" className="w-6 h-6" />
          <span className="text-sm text-gray-500 ml-2">4.5/5</span>
        </div>
      </div>

      <button className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded rounded-lg mt-4 transition-colors duration-200">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
