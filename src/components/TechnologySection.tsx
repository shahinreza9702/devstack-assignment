import StackItem from "./StackItem";
import StackPanel from "./StackPanel";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
  return (
    <section className="technology-section py-12 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-lg text-left text-gray-600 mt-4">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 grid grid-cols-3 gap-6">
            <TechnologyCard></TechnologyCard>
            <TechnologyCard></TechnologyCard>
            <TechnologyCard></TechnologyCard>
          </div>
          <div className="col-span-1">
            <StackPanel>
              <StackItem></StackItem>
            </StackPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
