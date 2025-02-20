import Explore from "./Explore";

export function Home() {
  return (
    <div className="absolute top-0 right-0 left-0 bg-home-bg-sm md:bg-home-bg-m lg:bg-home-bg-lg bg-no-repeat bg-cover min-h-screen px-10">
      <Explore />
    </div>
  );
}
