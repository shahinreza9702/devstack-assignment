import { use, useState } from "react";
import StackItem from "./StackItem";
import StackPanel from "./StackPanel";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

interface TechnologySectionProps {
  technologiesPromise: Promise<Technology[]>;
}

const TechnologySection = ({ technologiesPromise }: TechnologySectionProps) => {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<Technology[]>([]);
  const addToStack = (technology:Technology) => {
    setStack((currentStack) => {
      if(currentStack.some((item) => item.id === technology.id)){
        return currentStack;
      };

      return [...currentStack, technology];
    });
  };

  const removeFromStack = (technologyId:Technology['id']) => {
    setStack((currentStack) => currentStack.filter((item) => item.id !== technologyId));
  };

  const removeAllFromStack  = () => {
    setStack([]);
  }
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
            {technologies.map((technology) => {
              return (
                <TechnologyCard key={technology.id} technology={technology} isInStack={stack.some((item) => item.id === technology.id)} onAdd={()=> addToStack(technology)} />
              );
            })}
          </div>
          <div className="col-span-1">
            <StackPanel stackCount={stack.length} onRemoveAll={removeAllFromStack}>
              {stack.map((technology) => (
                <StackItem key={technology.id} technology={technology} onRemove={() => removeFromStack(technology.id)}></StackItem>
              ))}
            </StackPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
