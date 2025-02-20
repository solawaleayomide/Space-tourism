import { useState } from "react";
import { technology } from "../../data.json";

function Explore() {
  const [techs] = useState(technology);
  console.log([techs]);
  const [value, setValue] = useState(0);

  const { name, images, description } = techs[value];

  return (
    <div className="lg:px-20 text-white flex flex-col  lg:flex-row gap-10 lg:gap-0 items-center lg:h-screen">
      <div className="flex-1 flex flex-col justify-center gap-12 items-center text-center lg:items-start lg:text-start pt-[12rem] md:pt-[17rem] lg:pt-[5rem]">
        <h1 className="font-barlowCondensed text-[1.3rem] flex gap-5 uppercase tracking-[0.2rem]">
          <span>03</span> space launch 101
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-row items-center justify-center lg:flex-col gap-10">
            {techs.map((tech, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setValue(index)}
                  className={`uppercase text-[1.2rem] flex items-center justify-center text-center  ${
                    index === value
                      ? "border border-white text-[#D0D6F9] bg-white rounded-full p-1 w-12 h-12"
                      : "text-white"
                  }`}
                >
                  0{index + 1}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bellefair uppercase text-gray-400 text-[1.5rem]">
              the technology ...
            </span>
            <h1 className="font-bellefair uppercase text-[2rem]">{name}</h1>
            <p className="font-barlow  text-gray-400">{description}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 h-full flex items-center justify-center py-[5rem]">
        <div className="lg:h-[25rem]">
          <img
            src={images.portrait}
            alt="tech-images"
            className="w-full h-full object-fill  hidden lg:block"
          />

          <img
            src={images.landscape}
            alt="tech-images"
            className="w-full h-full object-fill lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;
