import Explore from "./Explore";

export function Destination() {
  return (
    <div>
      <div className="absolute top-0 right-0 left-0 bg-planet-bg-sm md:bg-planet-bg-md lg:bg-planet-bg-lg  bg-no-repeat bg-cover min-h-screen overflow-hidden px-10">
        <Explore />
      </div>
    </div>
  );
}
