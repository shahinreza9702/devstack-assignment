import { Suspense } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import type { Technology } from "./types/technology";

const technologiesFetch = async (): Promise<Technology[]> => {
  const response = await fetch("../src/data/technologies.json");

  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }
  const data: Technology[] = await response.json();
  return data;
};

const technologiesPromise: Promise<Technology[]> = technologiesFetch();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-left">
              Explore the <span className="text-pink-600">Technologies</span>
            </h2>
            <p className="text-lg text-left text-gray-600 mt-4">
              Pick one technology per category to build your ideal stack.
            </p>
            <h2>Loading technologies...</h2>
          </div>
        }
      >
        <TechnologySection
          technologiesPromise={technologiesPromise}
        ></TechnologySection>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
