import { useState } from "react";
import { crew } from "../../data.json";

function Explore() {
  const [crews] = useState(crew);
  console.log([crews]);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crews[value];

  return (
    <div className="lg:px-20 text-white flex flex-col  lg:flex-row gap-[8rem] lg:gap-0 items-center lh-screen">
      <div className="flex-1 flex flex-col justify-center gap-10 items-center text-center lg:items-start lg:text-start pt-[12rem] md:pt-[17rem] lg:pt-20">
        <h1 className="font-barlowCondensed text-[1.3rem] flex gap-5 uppercase tracking-[0.2rem]">
          <span>02</span> meet your crew
        </h1>

        <div className="flex flex-col gap-2">
          <span className="font-bellefair uppercase text-gray-400 text-[1.5rem]">
            {role}
          </span>
          <h1 className="font-bellefair uppercase text-[2rem]">{name}</h1>
          <p className="font-barlow  text-gray-400">{bio}</p>
        </div>

        <div className="flex gap-5">
          {crews.map((crew, index) => {
            return (
              <div
                key={index}
                onClick={() => setValue(index)}
                className={`uppercase text-[1.2rem] text-center  ${
                  index === value
                    ? "border border-white text-[#D0D6F9] bg-white rounded-full p-1 w-10 h-10 "
                    : "text-white"
                }`}
              >
                0{index + 1}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 h-full flex items-end">
        <div className="md:w-[30rem] md:h-[40rem] lg:w-[20rem] lg:h-[29.5rem] flex mx-auto">
          <img
            src={images.png}
            alt="crew-iamges"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;
