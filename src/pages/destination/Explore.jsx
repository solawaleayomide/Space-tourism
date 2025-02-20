import { useState } from "react";
import { destinations } from "../../data.json";

function Explore() {
  const [planets] = useState(destinations);
  console.log([planets]);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <div className="mt-[17rem] lg:mt-[13rem] px-20 pb-20 lg:pb-0 text-white flex flex-col lg:flex-row gap-[8rem] lg:gap-0 items-center">
      <div className="flex-1 flex flex-col gap-20">
        <h1 className="font-barlowCondensed text-[1.3rem] flex gap-5 uppercase tracking-[0.2rem]">
          <span>01</span> Pick your destination
        </h1>

        <div className="w-[20rem]">
          <img src={images.png} alt={name} className="w-full object-cover" />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-8 justify-center px-10 text-center lg:text-start">
          <div className=" font-barlowCondensed flex gap-5 mx-auto lg:mx-0">
            {planets.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`uppercase text-[1.2rem]  ${
                    index === value
                      ? "border-b border-white text-white"
                      : "text-[#D0D6F9]"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <h1 className="font-bellefair text-[5rem] uppercase">{name}</h1>

          <span className="font-barlow text-[#D0D6F9] ">{description}</span>

          <div className="flex justify-between">
            <div className="flex flex-col gap-1 uppercase">
              <span className="font-barlowCondensed text-[#D0D6F9]">
                avg. distance
              </span>
              <span className="font-bellefair text-[1.2rem] tracking-[0.1rem]">
                {distance}
              </span>
            </div>

            <div className="flex flex-col gap-1 uppercase">
              <span className="font-barlowCondensed text-[#D0D6F9]">
                est. travel time
              </span>
              <span className="font-bellefair text-[1.2rem] tracking-[0.1rem]">
                {travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
