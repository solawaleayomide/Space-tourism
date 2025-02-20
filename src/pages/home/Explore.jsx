import { Link } from "react-router-dom";

function Explore() {
  return (
    <div className="mt-[15rem] pb-20 md:pb-0 md:mt-[20rem] lg:mt-[18rem] text-white flex flex-col lg:flex-row items-center gap-20 lg:gap-10 px-20">
      <div className="flex-1">
        <div className="flex flex-col text-center lg:text-start">
          <span className="uppercase font-barlowCondensed text-[1.5rem] tracking-[0.1rem]">
            so, you want to travel to,
          </span>
          <h1 className="uppercase text-[6rem] md:text-[8rem] lg:text-[5rem] font-bellefair font-bold">
            space
          </h1>
          <span className="font-barlow text-sm">
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <button className="bg-white text-[#0B0D17] uppercase font-bellefair h-16 w-16 p-20 rounded-full text-2xl flex items-center justify-center">
          <Link to="/destination">explore</Link>
        </button>
      </div>
    </div>
  );
}

export default Explore;
