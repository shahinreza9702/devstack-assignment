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
      <Suspense fallback={<h2>Loading technologies...</h2>}>
        <TechnologySection
          technologiesPromise={technologiesPromise}
        ></TechnologySection>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
