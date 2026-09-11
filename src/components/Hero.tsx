import HeroImage from "../../public/images/banner-stack.png";
const Hero = () => {
  return (
    <section className="hero min-h-[calc(100vh-4rem)] bg-base-100">
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center px-4">
        <div className="flex w-full items-center justify-between gap-12">
          <div className="flex w-1/2 flex-col gap-5">
            <h1 className="text-5xl font-bold">Build Your Ideal</h1>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </h1>
            <p className="text-lg text-[#475569] w-3/4">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex items-center gap-5">
              <button className="btn bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white px-6 py-2 rounded-md hover:from-[#D81B7E] hover:via-[#7C3AED] hover:to-[#FF5722]">
                Explore Technologies
              </button>
              <button className="btn bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 px-6 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center">
            <img
              src={HeroImage}
              alt="Hero"
              className="w-full max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
